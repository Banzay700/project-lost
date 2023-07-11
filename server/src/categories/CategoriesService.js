import { CategoryDAL } from './CategoriesDAL.js';

const create = async category => {
    const createdCategory = await CategoryDAL.create(category);
    return createdCategory;
};

const getAll = async category => {
    let categories = [];
    if (!!category) {
        const categoryID = await CategoryDAL.findOne(category, 'id');
        categories = await CategoryDAL.findSubCategoryByCategory(categoryID);
    } else {
        categories = await CategoryDAL.findAll();
    }

    return categories;
};

const update = async category => {
    if (!category.id) {
        throw new Error('ID was not set');
    }
    const updatedCategory = await CategoryDAL.update(category);
    return updatedCategory;
};

const deleteCategory = async id => {
    if (!id) {
        throw new Error('ID was not set');
    }
    const category = await CategoryDAL.deleteCategory(id);
    return category;
};

export const CategoriesService = {
    create,
    getAll,
    update,
    deleteCategory,
};
