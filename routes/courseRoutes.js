const express = require('express');

const router = express.Router();

const auth = require('../middleware/authMiddleware');

const {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} = require('../controllers/courseController');

router.get('/', auth, getAllCourses);
router.get('/:id', auth, getCourseById);
router.post('/', auth, createCourse);
router.put('/:id', auth, updateCourse);
router.delete('/:id', auth, deleteCourse);

module.exports = router;
