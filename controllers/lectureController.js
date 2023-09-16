const Lecturer = require('../models/Lecture');

// Create a new lecturer
const createLecturer = async (req, res) => {
  try {
    const lecturer = await Lecturer.create(req.body);
    return res.status(201).json(lecturer);
  } catch (error) {
    return res.status(500).json({ error: 'Could not create the lecturer' });
  }
};

// Get all lecturers
const getAllLecturers = async (req, res) => {
  try {
    const lecturers = await Lecturer.findAll();
    return res.status(200).json(lecturers);
  } catch (error) {
    return res.status(500).json({ error: 'Could not retrieve lecturers' });
  }
};

// Get a lecturer by ID
const getLecturerById = async (req, res) => {
  const { id } = req.params;

  try {
    const lecturer = await Lecturer.findByPk(id);
    if (!lecturer) {
      return res.status(404).json({ error: 'Lecturer not found' });
    }
    return res.status(200).json(lecturer);
  } catch (error) {
    return res.status(500).json({ error: 'Could not retrieve the lecturer' });
  }
};

// Update a lecturer by ID
const updateLecturer = async (req, res) => {
  const { id } = req.params;

  try {
    const [updatedRows] = await Lecturer.update(req.body, {
      where: { id },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Lecturer not found' });
    }

    const updatedLecturer = await Lecturer.findByPk(id);
    return res.status(200).json(updatedLecturer);
  } catch (error) {
    return res.status(500).json({ error: 'Could not update the lecturer' });
  }
};

// Delete a lecturer by ID
const deleteLecturer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await Lecturer.destroy({
      where: { id },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Lecturer not found' });
    }

    return res.status(204).send(); // No content, successful deletion
  } catch (error) {
    return res.status(500).json({ error: 'Could not delete the lecturer' });
  }
};

module.exports = {
  createLecturer,
  getAllLecturers,
  getLecturerById,
  updateLecturer,
  deleteLecturer,
};
