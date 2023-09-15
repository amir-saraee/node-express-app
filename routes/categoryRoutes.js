const express = require('express')
const auth = require('../middleware/authMiddleware')

const router = express.Router()

const { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } = require('../controllers/categoryController')


router.get('/', auth, getCategories)
router.get('/:id',auth, getCategoryById)
router.post('/',auth, createCategory)
router.put('/:id',auth, updateCategory)
router.delete('/:id',auth, deleteCategory)


module.exports = router