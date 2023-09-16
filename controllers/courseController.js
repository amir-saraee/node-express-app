const Course = require('../models/Course'); // Import the Course model

// Create a new course
const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    return res.status(201).json(course);
  } catch (error) {
    return res.status(500).json({ error: 'Could not create the course' });
  }
};

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ error: 'Could not retrieve courses' });
  }
};

// Get a course by ID
const getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findByPk(id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ error: 'Could not retrieve the course' });
  }
};

// Update a course by ID
const updateCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const [updatedRows] = await Course.update(req.body, {
      where: { id },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const updatedCourse = await Course.findByPk(id);
    return res.status(200).json(updatedCourse);
  } catch (error) {
    return res.status(500).json({ error: 'Could not update the course' });
  }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await Course.destroy({
      where: { id },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    return res.status(204).send(); // No content, successful deletion
  } catch (error) {
    return res.status(500).json({ error: 'Could not delete the course' });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};
