import { BillsService } from './BillsService.js';

const create = async (req, res) => {
    try {
        const bill = await BillsService.create(req.body);
        res.json(bill);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const getAll = async (req, res) => {
    try {
        const bills = await BillsService.getAll(req.query);
        return res.json(bills);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const getOne = async (req, res) => {
    try {
        const bill = await BillsService.getOne(req.params.id);
        return res.json(bill);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const update = async (req, res) => {
    try {
        const updateBill = await BillsService.update(req.body);
        return res.json(updateBill);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const deleteBill = async (req, res) => {
    try {
        const bill = await BillsService.deleteBill(req.params.id);

        if (!bill) {
            res.status(404).json('ID was not founded or already deleted');
        } else {
            return res.json(bill);
        }
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const sendBill = async (req, res) => {
    try {
        const email = await BillsService.sendBill(req.params.id);

        return res.json(`bill to ${email} was sent`);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const BillsController = {
    create,
    getAll,
    getOne,
    update,
    deleteBill,
    sendBill,
};
