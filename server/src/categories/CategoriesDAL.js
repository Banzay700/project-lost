import CategoryDB from "./CategoriesModel.js";

const create = async (category) => {
  return CategoryDB.create(category);
};

const findAll = async () => {
  return CategoryDB.find({ type: "category" }, { title: 1, picture: 1 });
};

const findSubCategoryByCategory = async (parentId) => {
  return CategoryDB.find({ parent: parentId }, "title");
};

const findOne = async (category, field) => {
  return CategoryDB.findOne({ title: category }, field);
};

const findByOne = async (findValue) => {
  return CategoryDB.findOne(findValue);
};
const find = async (findValue, populate) => {
  const findData = CategoryDB.find(findValue);
  if (populate) {
    findData.populate(populate);
  }
  return findData;
};

const update = async (category) => {
  return CategoryDB.findByIdAndUpdate(category.id, category, { new: true });
};

const deleteCategory = async (id) => {
  return CategoryDB.findByIdAndDelete(id);
};

export const CategoryDAL = {
  create,
  findAll,
  findSubCategoryByCategory,
  findOne,
  findByOne,
  find,
  update,
  deleteCategory,
};
