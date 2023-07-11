import TokenModel from "./TokenModel.js";

const getOne = async ({ refreshToken }) => {
	return  TokenModel.findOne({ refreshToken });
};

export const create = async ({ user, refreshToken }) => {
	return new TokenModel({
		user,
		refreshToken,
	}).save();
};

export const update = async ({ user, refreshToken }) => {
	return TokenModel.findOneAndUpdate({
		user,
		refreshToken,
	});
};

export const deleteToken = async ({ refreshToken }) => {
	return TokenModel.deleteOne({ refreshToken });
};

export const TokenDAL = {
	getOne,
	create,
	update,
	deleteToken,
}