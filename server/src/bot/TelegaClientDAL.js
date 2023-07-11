import TelegaClientDB from './TelegaClientModel.js';

const create = async clientInfo => {
    return TelegaClientDB.create(clientInfo);
};

const find = async filter => {
    return TelegaClientDB.find(filter);
};

const update = async clientInfo => {
    return TelegaClientDB.findOneAndUpdate({ nickname: clientInfo.nickname }, clientInfo);
};

export const TelegaClientDAL = {
    create,
    find,
    update,
};
