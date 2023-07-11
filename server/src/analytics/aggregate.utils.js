export const aggregateDishes = [
  {
    $match: {
      status: "closed",
    },
  },
  {
    $lookup: {
      from: "orders",
      localField: "orderID",
      foreignField: "_id",
      as: "orderData",
    },
  },
  {
    $unwind: "$orderData",
  },
  {
    $project: {
      dishes: "$orderData.dishes",
    },
  },
  {
    $unwind: "$dishes",
  },
  {
    $lookup: {
      from: "dishes",
      localField: "dishes.dishID",
      foreignField: "_id",
      as: "dishData",
    },
  },
  {
    $unwind: "$dishData",
  },
  {
    $lookup: {
      from: "categories",
      localField: "dishData.category",
      foreignField: "_id",
      as: "categories",
    },
  },
  {
    $lookup: {
      from: "categories",
      localField: "categories.parent",
      foreignField: "_id",
      as: "parentCategory",
    },
  },
  {
    $project: {
      category: {
        id: "$dishData.category",
        title: { $arrayElemAt: ["$categories.title", 0] },
        parent: {
          id: { $arrayElemAt: ["$parentCategory._id", 0] },
          title: { $arrayElemAt: ["$parentCategory.title", 0] },
        },
      },
      amount: "$dishes.amount",
      title: "$dishes.title",
    },
  },
];

export const aggregateDishesTime = ({ dayFrom, dayTo, status }) => {
  return [
    {
      $match: {
        $and: [
          {
            createdAt: {
              $gte: dayFrom,
              $lte: dayTo,
            },
          },
          {
            status,
          },
        ],
      },
    },
    {
      $group: {
        _id: null,
        totalPriceAll: { $sum: "$totalPrice" },
        totalCount: { $sum: 1 },
      },
    },
  ];
};

export const aggregateRangeDayInMonth = ({ dayFrom, dayTo, status }) => {
  return [
    {
      $match: {
        $and: [
          {
            createdAt: {
              $gte: dayFrom,
              $lte: dayTo,
            },
          },
          {
            status,
          },
        ],
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        totalPriceAll: { $sum: "$totalPrice" },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ];
};

export const aggregateRangeYearInMonth = ({ dayFrom, dayTo, status }) => {
  return [
    {
      $match: {
        $and: [
          {
            createdAt: {
              $gte: dayFrom,
              $lte: dayTo,
            },
          },
          {
            status,
          },
        ],
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        totalPriceAll: { $sum: "$totalPrice" },
      },
    },
  ];
};

export const aggregateRangeOrderType = ({ dayFrom, dayTo, status }) => {
  return [
    {
      $match: {
        createdAt: {
          $gte: dayFrom,
          $lte: dayTo,
        },
        status,
      },
    },
    {
      $group: {
        _id: "$orderType",
        totalPriceAll: { $sum: "$totalPrice" },
      },
    },
  ];
};

export const aggregateAverageBillsRange = ({
  dayFrom,
  dayTo,
  status,
  format,
}) => {
  return [
    {
      $match: {
        $and: [
          {
            createdAt: {
              $gte: dayFrom,
              $lte: dayTo,
            },
          },
          {
            status,
          },
        ],
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: format, date: "$createdAt" } },
        totalPriceAll: { $sum: "$totalPrice" },
        count: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 1,
        totalPriceAll: {
          $round: [{ $divide: ["$totalPriceAll", "$count"] }, 0],
        },
      },
    },
  ];
};
