const CourseVideo = require('../models/CourseVideo');
const Course = require('../models/Course');
const upload = require('../config/multer');

// Create a new course video with file upload
const createCourseVideo = async (req, res) => {
  try {
    // Use the 'upload.single' middleware to handle file upload
    upload.single('video')(req, res, async (err) => {
      if (err) {
        console.log(err);
        return res.status(400).json({ error: 'File upload failed' });
      }
      console.log(req);

      // Access the uploaded file details using 'req.file'
      const { filename, path, originalname, size } = req.file;

      // Save the uploaded file details in the database
      const courseVideo = await CourseVideo.create({
        // Include other properties from the request body
        name: originalname,
        duration: req.body.duration,
        size,

        link: filename, // Save the filename in the 'link' field
      });

      return res.status(201).json(courseVideo);
    });
  } catch (error) {
    return res.status(500).json({ error: 'Could not create the course video' });
  }
};

// Get all course videos
const getAllCourseVideos = async (req, res) => {
  try {
    const courseVideos = await CourseVideo.findAll();
    return res.status(200).json(courseVideos);
  } catch (error) {
    return res.status(500).json({ error: 'Could not retrieve course videos' });
  }
};

// Get a course video by ID
const getCourseVideoById = async (req, res) => {
  const { id } = req.params;

  try {
    const courseVideo = await CourseVideo.findByPk(id);
    if (!courseVideo) {
      return res.status(404).json({ error: 'Course video not found' });
    }
    return res.status(200).json(courseVideo);
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Could not retrieve the course video' });
  }
};

// Update a course video by ID
const updateCourseVideo = async (req, res) => {
  const { id } = req.params;

  try {
    const [updatedRows] = await CourseVideo.update(req.body, {
      where: { id },
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: 'Course video not found' });
    }

    const updatedCourseVideo = await CourseVideo.findByPk(id);
    return res.status(200).json(updatedCourseVideo);
  } catch (error) {
    return res.status(500).json({ error: 'Could not update the course video' });
  }
};

// Delete a course video by ID
const deleteCourseVideo = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedRows = await CourseVideo.destroy({
      where: { id },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Course video not found' });
    }

    return res.status(204).send(); // No content, successful deletion
  } catch (error) {
    return res.status(500).json({ error: 'Could not delete the course video' });
  }
};

module.exports = {
  createCourseVideo,
  getAllCourseVideos,
  getCourseVideoById,
  updateCourseVideo,
  deleteCourseVideo,
};
