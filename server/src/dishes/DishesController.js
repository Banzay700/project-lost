import { DishesService } from "./DishesService.js";

const create = async (req, res) => {
  try {
    const dish = await DishesService.create(req.body);
    res.json(dish);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const getAll = async (req, res) => {
  try {
    const dishes = await DishesService.getAll(req.query);
    return res.json(dishes);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const getOne = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(404).json({ error: "Incorrect ID" });
    }

    const dish = await DishesService.getOne(req.params.id);

    return res.json(dish);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const update = async (req, res) => {
  try {
    const updatedDish = await DishesService.update(req.body);
    return res.json(updatedDish);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
const deleteDish = async (req, res) => {
  try {
    const dish = await DishesService.deleteDish(req.params.id);
    if (!dish) {
      res.status(404).json("ID was not founded or already deleted");
    } else {
      return res.json(dish);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const DishesController = {
  create,
  getAll,
  getOne,
  update,
  deleteDish,
};
