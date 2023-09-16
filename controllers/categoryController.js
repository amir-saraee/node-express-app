const Category = require('../models/Category');

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { parentId, name, slug, description, sort, isSelectable, isActive } =
      req.body;

    if (!name || !slug || !sort || !isSelectable || !isActive) {
      return res
        .status(400)
        .json({ success: false, message: 'Some fields are not provided.' });
    }

    const category = await Category.create({
      parentId,
      name,
      slug,
      description,
      sort,
      isSelectable,
      isActive,
    });

    return res.status(201).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a category
const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { parentId, name, slug, description, sort, isSelectable, isActive } =
      req.body;

    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Update the category
    category.parentId = parentId;
    category.name = name;
    category.slug = slug;
    category.description = description;
    category.sort = sort;
    category.isSelectable = isSelectable;
    category.isActive = isActive;

    await category.save();

    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    await category.destroy();

    return res.status(204).send(); // No content response
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
