import { CategoriesService } from "./CategoriesService.js";

export const create = async (req, res) => {
  try {
    const category = await CategoriesService.create(req.body);
    res.json(category);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAll = async (req, res) => {
  try {
    const { category } = req.query;

    const categories = await CategoriesService.getAll(category);
    return res.json(categories);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const update = async (req, res) => {
  try {
    const updatedCategory = await CategoriesService.update(req.body);
    return res.json(updatedCategory);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await CategoriesService.deleteCategory(req.params.id);
    if (!category) {
      res.status(404).json("ID was not founded or already deleted");
    } else {
      return res.json(category);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const CategoriesController = {
  create,
  getAll,
  update,
  deleteCategory,
};
