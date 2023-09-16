const express = require('express');

const router = express.Router();

const auth = require('../middleware/authMiddleware');

const {
  createCourseVideo,
  deleteCourseVideo,
  getAllCourseVideos,
  getCourseVideoById,
  updateCourseVideo,
} = require('../controllers/courseVideoController');

router.get('/', auth, getAllCourseVideos);
router.get('/:id', auth, getCourseVideoById);
router.post('/', auth, createCourseVideo);
router.put('/:id', auth, updateCourseVideo);
router.delete('/:id', auth, deleteCourseVideo);

module.exports = router;
