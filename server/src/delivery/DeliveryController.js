import { DeliveryService } from './DeliveryService.js';

const create = async (req, res) => {
    try {
        const delivery = await DeliveryService.create(req.body);
        res.json(delivery);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const getAll = async (req, res) => {
    try {
        const deliveries = await DeliveryService.getAll(req.query);
        return res.json(deliveries);
    } catch (e) {
        res.status(500).json(e.message);
    }
};
const getOne = async (req, res) => {
    try {
        const delivery = await DeliveryService.getOne(req.params.id);
        return res.json(delivery);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const update = async (req, res) => {
    try {
        const updateDelivery = await DeliveryService.update(req.body);
        return res.json(updateDelivery);
    } catch (e) {
        res.status(500).json(e.message);
    }
};
const deleteDelivery = async (req, res) => {
    try {
        const delivery = await DeliveryService.deleteDelivery(req.params.id);

        if (!delivery) {
            res.status(404).json('ID was not founded or already deleted');
        } else {
            return res.json(delivery);
        }
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const sendMsg = async (req, res) => {
    try {
        const phoneNumber = await DeliveryService.sendMsg(req.params.id);

        return res.json(`message to ${phoneNumber} was sent`);
    } catch (e) {
        res.status(e.statusCode || 500).json(e.message);
    }
};

export const DeliveryController = {
    create,
    getAll,
    getOne,
    update,
    deleteDelivery,
    sendMsg,
};
