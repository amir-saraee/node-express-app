const express = require('express')

const router = express.Router()

const {createArticle,deleteArticle,getArticleById,getArticles,updateArticle} = require('../controllers/articleController')


router.get('/articles',  getArticles)
router.get('/articles/:id', getArticleById)
router.post('/articles/', createArticle)

module.exports = router