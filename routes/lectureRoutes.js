const express = require('express');

const router = express.Router();

const auth = require('../middleware/authMiddleware');

const {
  createLecturer,
  deleteLecturer,
  getAllLecturers,
  getLecturerById,
  updateLecturer,
} = require('../controllers/lectureController');

router.get('/', auth, getAllLecturers);
router.get('/:id', auth, getLecturerById);
router.post('/', auth, createLecturer);
router.put('/:id', auth, updateLecturer);
router.delete('/:id', auth, deleteLecturer);

module.exports = router;
