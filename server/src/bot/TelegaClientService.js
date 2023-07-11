import { TelegaClientDAL } from './TelegaClientDAL.js';

const create = async clientInfo => {
    const createdClientItem = await TelegaClientDAL.create(clientInfo);
    console.log(createdClientItem);
    return createdClientItem;
};

const update = async clientInfo => {
    if (!clientInfo.nickname) {
        throw new Error('nickname is unknown');
    }

    const updateClientItem = await TelegaClientDAL.update(clientInfo);
    return updateClientItem;
};

const find = async filter => {
    if (!filter) {
        throw new Error('filter was not set');
    }

    const clientItem = await TelegaClientDAL.find(filter);

    return clientItem;
};

export const TelegaClientService = {
    create,
    find,
    update,
};
