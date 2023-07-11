import OrderDB from './OrdersModel.js';

const create = async order => {
    return OrderDB.create(order);
};

const findAll = async ({ page, limit, findValue }) => {
    const totalCount = await OrderDB.countDocuments(findValue);
    const data = await OrderDB.find(findValue)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit);
    // .populate('user', 'firstName secondName');

    return { data, totalCount };
};

const findByID = async id => {
    return OrderDB.findById(id);
    // .populate('user', 'firstName secondName');
};

const update = async order => {
    return OrderDB.findByIdAndUpdate(order.id, order, { new: true });
};

const updateStatus = async id => {
    return OrderDB.findByIdAndUpdate(id, { status: 'closed' }, { new: true });
};

const deleteOrder = async id => {
    return OrderDB.findByIdAndDelete(id);
};

const findAggregate = async aggregateSchema => {
    return OrderDB.aggregate(aggregateSchema);
};

export const OrderDAL = {
    create,
    findAll,
    findByID,
    update,
    updateStatus,
    deleteOrder,
    findAggregate,
};
