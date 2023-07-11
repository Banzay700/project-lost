export const getDishDATA = [
    {
        $lookup: {
            from: 'categories',
            localField: 'categoryID',
            foreignField: '_id',
            as: 'categoryData',
        },
    },
    {
        $lookup: {
            from: 'categories',
            localField: 'subcategoryID',
            foreignField: '_id',
            as: 'subcategoryData',
        },
    },

    {
        $lookup: {
            from: 'dishes',
            localField: 'additionalFood',
            foreignField: '_id',
            as: 'additionalFood',
        },
    },
    {
        $project: {
            id: '$_id',
            _id: 0,
            type: 1,
            title: 1,
            price: 1,
            picture: 1,
            description: 1,
            category: { $arrayElemAt: ['$categoryData.title', 0] },
            subcategory: { $arrayElemAt: ['$subcategoryData.title', 0] },
            weight: 1,
            bonus: 1,
            additionalFood: {
                title: 1,
                price: 1,
                weight: 1,
            },
        },
    },
];
