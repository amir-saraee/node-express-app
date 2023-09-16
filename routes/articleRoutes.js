const express = require('express');

const router = express.Router();

const auth = require('../middleware/authMiddleware');

const {
  createArticle,
  deleteArticle,
  getArticleById,
  getArticles,
  updateArticle,
} = require('../controllers/articleController');

router.get('/articles', getArticles);
router.get('/articles/:id', getArticleById);
router.post('/articles/', auth, createArticle);
router.put('/articles/:id', auth, updateArticle);
router.delete('/articles/:id', auth, deleteArticle);

module.exports = router;
