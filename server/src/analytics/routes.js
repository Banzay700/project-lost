import { Router } from "express";
import { AnalyticsControllers } from "./controllers.js";

export const analyticsRouter = new Router();
export const analyticsDefaultPath = "/api/analytics";

analyticsRouter.get(
  "/top-sales-category",
  AnalyticsControllers.topSalesCategory
);
analyticsRouter.get("/general", AnalyticsControllers.general);
analyticsRouter.get("/general-total", AnalyticsControllers.generalTotal);
analyticsRouter.get("/order-type-total", AnalyticsControllers.orderTypeTotal);
analyticsRouter.get("/average-total", AnalyticsControllers.averageTotal);
