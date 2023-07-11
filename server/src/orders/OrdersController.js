import { OrderService } from './OrdersService.js';

const create = async (req, res) => {
    try {
        const order = await OrderService.create(req.body);
        res.json(order);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const getAll = async (req, res) => {
    try {
        const orders = await OrderService.getAll(req.query);
        return res.json(orders);
    } catch (e) {
        res.status(500).json(e.message);
    }
};
const getOne = async (req, res) => {
    try {
        const order = await OrderService.getOne(req.params.id);
        return res.json(order);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const update = async (req, res) => {
    try {
        const updateOrder = await OrderService.update(req.body);
        return res.json(updateOrder);
    } catch (e) {
        res.status(500).json(e.message);
    }
};
const deleteOrder = async (req, res) => {
    try {
        const order = await OrderService.deleteOrder(req.params.id);

        if (!order) {
            res.status(404).json('ID was not founded or already deleted');
        } else {
            return res.json(order);
        }
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const OrderController = {
    create,
    getAll,
    getOne,
    update,
    deleteOrder,
};
