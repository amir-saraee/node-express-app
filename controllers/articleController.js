const Article = require('../models/Article');
const Category = require('../models/Category');

// Create a new article
const createArticle = async (req, res) => {
  try {
    const { category_id, slug, title, abstract, more } = req.body;

    // Check if the category exists
    const category = await Category.findByPk(category_id);
    if (!category) {
      return res.status(400).json({ message: 'Category not found' });
    }

    const article = await Article.create({
      category_id,
      slug,
      title,
      abstract,
      more,
    });

    return res.status(201).json(article);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.findAll({
      include: { model: Category, as: 'category' }, // Include the associated Category model
    });

    return res.status(200).json(articles);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get article by ID
const getArticleById = async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await Article.findByPk(articleId, {
      include: { model: Category, as: 'categories' }, // Include the associated Category model
    });

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    return res.status(200).json(article);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Update an article
const updateArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const { categoryId, slug, title, abstract, more } = req.body;

    // Check if the category exists
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(400).json({ message: 'Category not found' });
    }

    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    // Update the article
    article.categoryId = categoryId;
    article.slug = slug;
    article.title = title;
    article.abstract = abstract;
    article.more = more;

    await article.save();

    return res.status(200).json(article);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete an article
const deleteArticle = async (req, res) => {
  try {
    const articleId = req.params.id;
    const article = await Article.findByPk(articleId);

    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    await article.destroy();

    return res.status(204).send(); // No content response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
