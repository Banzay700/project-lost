import UsersModel from "./UsersModel.js";

const create = async ({ user }) => {
  return new UsersModel(user).save();
};

const findAll = async ({ skip, perPage, findValue }) => {
  const totalCount = await UsersModel.countDocuments(findValue);
  const data = await UsersModel.find(findValue)
    .sort({ status: 1 })
    .select("-createdAt -updatedAt")
    .skip(skip)
    .limit(perPage);

  return { totalCount, data };
};

const getUserLogin = async () => {
  return UsersModel.find({ status: "active" }).select(
    "firstName secondName userImage"
  );
};
const findByID = async ({ id }) => {
  return UsersModel.findById(id);
};

const findByOne = async ({ findOne }) => {
  return UsersModel.findOne(findOne);
};

const update = async ({ id, updateData }) => {
  return UsersModel.findByIdAndUpdate(id, updateData);
};

const deleteUser = async ({ id }) => {
  return UsersModel.findByIdAndDelete(id);
};

export const UserDAL = {
  create,
  findAll,
  getUserLogin,
  findByID,
  findByOne,
  update,
  deleteUser,
};
