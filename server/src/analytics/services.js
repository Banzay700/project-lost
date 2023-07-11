import { CategoryDAL } from "../categories/CategoriesDAL.js";
import { BillsDAL } from "../bills/BillsDAL.js";
import {
  compareCancellationPercentage,
  filterWithCategory,
  generatedAmountDishes,
  generatedAmountDishesByParentCategory,
  generatedArrayDateRangeMonth,
  generatedArrayDateYear,
  generatedArrayDays,
  generatedDate,
  generatedGeneralTotalResponse,
  percentageCancelAllCount,
  percentageChange,
} from "./utils.js";
import dayjs from "dayjs";
import { OrderDAL } from "../orders/OrdersDAL.js";
import { createError } from "../utils/error.js";
import {
  aggregateRangeDayInMonth,
  aggregateDishes,
  aggregateRangeYearInMonth,
  aggregateDishesTime,
  aggregateRangeOrderType,
  aggregateAverageBillsRange,
} from "./aggregate.utils.js";

const topSalesCategory = async ({ category }) => {
  const parentCategory = await CategoryDAL.findByOne({ _id: category });
  const subcategory = await CategoryDAL.findSubCategoryByCategory(category);
  const subcategoryID = subcategory.map((item) => item.id);

  const data = await BillsDAL.findAggregate(aggregateDishes);

  const categoriesAnalytics = {};

  if (parentCategory) {
    categoriesAnalytics.labels = [parentCategory.title];

    const filterWithCategories = filterWithCategory(data, subcategoryID);

    categoriesAnalytics.datasets = generatedAmountDishes(filterWithCategories);
  } else {
    categoriesAnalytics.labels = ["Top category"];
    categoriesAnalytics.datasets = generatedAmountDishesByParentCategory(data);
  }

  return categoriesAnalytics;
};

const billsTotalPriceAndCountWithRange = async ({ dayFrom, dayTo, status }) => {
  const data = await BillsDAL.findAggregate(
    aggregateDishesTime({ dayFrom, dayTo, status })
  );

  return data.length ? data[0] : [];
};
const ordersTotalPriceAndCountWithRange = async ({
  dayFrom,
  dayTo,
  status,
}) => {
  const data = await OrderDAL.findAggregate(
    aggregateDishesTime({ dayFrom, dayTo, status })
  );

  return data.length ? data[0] : [];
};

const general = async () => {
  const today = dayjs();

  const morning = today.startOf("day").toDate();
  const night = today.endOf("day").toDate();

  const startOfMonth = today.startOf("month").toDate();
  const endOfMonth = today.endOf("month").toDate();

  const yesterday = dayjs().subtract(1, "day").endOf("day").toDate();
  const sevenDaysAgo = dayjs().subtract(6, "day").startOf("day").toDate();

  const previousMonth = today.subtract(1, "month");
  const startPreviousOfMonth = previousMonth.startOf("month").toDate();
  const endPreviousOfMonth = previousMonth.endOf("month").toDate();

  const dataToday = await billsTotalPriceAndCountWithRange({
    dayFrom: morning,
    dayTo: night,
    status: "closed",
  });

  const dataSevenDays = await billsTotalPriceAndCountWithRange({
    dayFrom: sevenDaysAgo,
    dayTo: yesterday,
    status: "closed",
  });

  const TotalRevenue = {
    title: "Total revenue",
    value: dataToday?.totalPriceAll || 0,
    percentage: percentageChange({
      totalDay: dataToday?.totalPriceAll,
      totalRange: dataSevenDays?.totalPriceAll,
      averageDays: dataSevenDays?.totalCount,
    }),
    period: "Daily",
  };

  const TotalOrders = {
    title: "Total orders",
    value: dataToday?.totalCount || 0,
    percentage: percentageChange({
      totalDay: dataToday?.totalCount,
      totalRange: dataSevenDays?.totalCount,
      averageDays: dataSevenDays?.totalCount,
    }),
    period: "Daily",
  };

  const dataMonth = await billsTotalPriceAndCountWithRange({
    dayFrom: startOfMonth,
    dayTo: endOfMonth,
    status: "closed",
  });

  const dataPreviousMonth = await billsTotalPriceAndCountWithRange({
    dayFrom: startPreviousOfMonth,
    dayTo: endPreviousOfMonth,
    status: "closed",
  });

  const averageMonth = Math.round(
    (dataMonth?.totalPriceAll || 0) / dataMonth?.totalCount
  );

  const AverageBill = {
    title: "Average bill",
    value: averageMonth,
    percentage: percentageChange({
      totalDay: averageMonth,
      totalRange: dataPreviousMonth?.totalPriceAll,
      averageDays: dataPreviousMonth?.totalCount,
    }),
    period: "Monthly",
  };

  const dataCancelOrderMonth = await ordersTotalPriceAndCountWithRange({
    dayFrom: startOfMonth,
    dayTo: endOfMonth,
    status: "cancel",
  });
  const dataCancelOrderPreviousMonth = await ordersTotalPriceAndCountWithRange({
    dayFrom: startPreviousOfMonth,
    dayTo: endPreviousOfMonth,
    status: "cancel",
  });

  const failureRateInMonth = percentageCancelAllCount({
    cancelledOrders: dataCancelOrderMonth?.totalCount,
    totalOrders: dataMonth?.totalCount,
  });

  const FailureRate = {
    title: "Failure rate",
    value: failureRateInMonth,
    percentage: compareCancellationPercentage({
      previousMonthCancelled: dataCancelOrderPreviousMonth?.totalCount,
      previousMonthTotal: dataPreviousMonth?.totalCount,
      currentMonthCancelled: dataCancelOrderMonth?.totalCount,
      currentMonthTotal: dataMonth?.totalCount,
    }),
    period: "Monthly",
  };

  return [TotalRevenue, TotalOrders, AverageBill, FailureRate];
};

const generalTotal = async ({ period }) => {
  const {
    startOfMonth,
    endOfMonth,
    startOfQuarterMonth,
    startOfYear,
    endOfYear,
  } = generatedDate();

  if (!period) {
    const allDatesArray = generatedArrayDays({ startOfMonth, endOfMonth });

    const result = await BillsDAL.findAggregate(
      aggregateRangeDayInMonth({
        dayFrom: startOfMonth.toDate(),
        dayTo: endOfMonth.toDate(),
        status: "closed",
      })
    );

    const numberDays = allDatesArray.map((date) =>
      Number(dayjs(date).format("DD"))
    );

    return generatedGeneralTotalResponse({
      labels: numberDays,
      title: "Total revenue month",
      data: result,
      dateArray: allDatesArray,
      dateFormat: "YYYY-MM-DD",
    });
  }

  if (period === "quarter") {
    const threeMonthsArray = generatedArrayDateRangeMonth({
      dateStart: endOfMonth,
      length: 3,
      indexDate: "month",
    });

    const result = await BillsDAL.findAggregate(
      aggregateRangeYearInMonth({
        dayFrom: startOfQuarterMonth.toDate(),
        dayTo: endOfMonth.toDate(),
        status: "closed",
      })
    );

    const monthName = threeMonthsArray.map((date) => date.format("MMMM"));

    return generatedGeneralTotalResponse({
      labels: monthName,
      title: "Total revenue quarter",
      data: result,
      dateArray: threeMonthsArray,
      dateFormat: "YYYY-MM",
      reverse: true,
    });
  }

  if (period === "year") {
    const monthsArray = generatedArrayDateYear({ startOfYear });

    const result = await BillsDAL.findAggregate(
      aggregateRangeYearInMonth({
        dayFrom: startOfYear.toDate(),
        dayTo: endOfYear.toDate(),
        status: "closed",
      })
    );

    const monthName = monthsArray.map((date) => {
      return date.format("MMMM");
    });

    return generatedGeneralTotalResponse({
      labels: monthName,
      title: "Total revenue year",
      data: result,
      dateArray: monthsArray,
      dateFormat: "YYYY-MM",
    });
  }

  throw createError("Not data found", 404);
};

const generalAverageTotalPrice = async ({ period }) => {
  const { startOfMonth, endOfMonth, startOfYear, endOfYear } = generatedDate();

  if (!period) {
    const allDatesArray = generatedArrayDays({ startOfMonth, endOfMonth });

    const numberDays = allDatesArray.map((date) =>
      Number(dayjs(date).format("DD"))
    );

    const result = await BillsDAL.findAggregate(
      aggregateAverageBillsRange({
        dayFrom: startOfMonth.toDate(),
        dayTo: endOfMonth.toDate(),
        status: "closed",
        format: "%Y-%m-%d",
      })
    );

    return generatedGeneralTotalResponse({
      labels: numberDays,
      title: "Average total revenue month",
      data: result,
      dateArray: allDatesArray,
      dateFormat: "YYYY-MM-DD",
    });
  }

  if (period === "year") {
    const monthsArray = generatedArrayDateYear({ startOfYear });

    const monthName = monthsArray.map((date) => {
      return date.format("MMMM");
    });

    const result = await BillsDAL.findAggregate(
      aggregateAverageBillsRange({
        dayFrom: startOfYear.toDate(),
        dayTo: endOfYear.toDate(),
        status: "closed",
        format: "%Y-%m",
      })
    );

    return generatedGeneralTotalResponse({
      labels: monthName,
      title: "Average total revenue year",
      data: result,
      dateArray: monthsArray,
      dateFormat: "YYYY-MM",
    });
  }

  throw createError("Not data found", 404);
};

const orderTypeDataInRange = async ({ dayFrom, dayTo, status }) => {
  const data = {
    labels: ["Dine In", "Take Away", "Delivery"],
    datasets: [
      {
        label: "Total",
        data: [],
      },
    ],
  };

  const orderTypeMap = ["dineIn", "takeAway", "delivery"];

  const dataOrderType = await OrderDAL.findAggregate(
    aggregateRangeOrderType({
      dayFrom,
      dayTo,
      status,
    })
  );

  orderTypeMap.forEach((orderType) => {
    const resultItem = dataOrderType.find((item) => item._id === orderType);
    data.datasets[0].data.push(resultItem ? resultItem.totalPriceAll : 0);
  });

  return data;
};

const orderTypeTotal = async ({ period }) => {
  const {
    startOfMonth,
    endOfMonth,
    startOfQuarterMonth,
    startOfYear,
    endOfYear,
  } = generatedDate();

  if (!period) {
    return orderTypeDataInRange({
      dayFrom: startOfMonth.toDate(),
      dayTo: endOfMonth.toDate(),
      status: "closed",
    });
  }
  if (period === "quarter") {
    return orderTypeDataInRange({
      dayFrom: startOfQuarterMonth.toDate(),
      dayTo: endOfMonth.toDate(),
      status: "closed",
    });
  }
  if (period === "year") {
    return orderTypeDataInRange({
      dayFrom: startOfYear.toDate(),
      dayTo: endOfYear.toDate(),
      status: "closed",
    });
  }
  throw createError("Not data found", 404);
};

export const AnalyticsServices = {
  topSalesCategory,
  general,
  generalTotal,
  orderTypeTotal,
  generalAverageTotalPrice,
};
