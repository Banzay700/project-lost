import mongoose from 'mongoose';
import DishDB from './DishesModel.js';
import { getDishDATA } from './utils.js';

const create = async dish => {
    return DishDB.create(dish);
};

const findAll = async ({ skip, perPage, findValues }) => {
    const totalCount = await DishDB.countDocuments(findValues);
    const data = await DishDB.find(findValues)
        .sort({ status: 1, updatedAt: -1 })
        .select('-createdAt -updatedAt')
        .populate('additionalFood')
        .populate('category')
        .populate({
            path: 'category',
            populate: {
                path: 'parent',
                select: 'title',
            },
        })
        .limit(perPage)
        .skip(skip);
    return { totalCount, data };
};

const findByID = async id => {
    return DishDB.findById(id)
        .select('-createdAt -updatedAt')
        .populate('additionalFood')
        .populate('category')
        .populate({
            path: 'category',
            populate: {
                path: 'parent',
                select: 'title',
            },
        });
};

const update = async dish => {
    return DishDB.findByIdAndUpdate(dish.id, dish, { new: true });
};

const deleteDish = async id => {
    return DishDB.findByIdAndDelete(id);
};

export const DishesDAL = {
    create,
    findAll,
    findByID,
    update,
    deleteDish,
};
