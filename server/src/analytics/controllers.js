import { AnalyticsServices } from "./services.js";

const topSalesCategory = async (req, res) => {
  try {
    const data = await AnalyticsServices.topSalesCategory(req.query);
    return res.json(data);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message);
  }
};
const general = async (req, res) => {
  try {
    const data = await AnalyticsServices.general(req.query);
    return res.json(data);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message);
  }
};

const generalTotal = async (req, res) => {
  try {
    const data = await AnalyticsServices.generalTotal(req.query);
    return res.json(data);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message);
  }
};

const orderTypeTotal = async (req, res) => {
  try {
    const data = await AnalyticsServices.orderTypeTotal(req.query);
    return res.json(data);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message);
  }
};
const averageTotal = async (req, res) => {
  try {
    const data = await AnalyticsServices.generalAverageTotalPrice(req.query);
    return res.json(data);
  } catch (e) {
    res.status(e.statusCode || 500).json(e.message);
  }
};

export const AnalyticsControllers = {
  topSalesCategory,
  general,
  generalTotal,
  orderTypeTotal,
  averageTotal,
};
