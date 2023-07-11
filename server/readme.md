## categories

#### example request http://localhost:5001/api/categories - GET ALL categories, POST, PUT

#### example request http://localhost:5001/api/categories/6453fe613b229fb1d201d915 - DELETE 1 category by ID

#### example request http://localhost:5001/api/categories?category=Drinks - GET ALL subcategories by category

## DISHES

#### example request http://localhost:5001/api/dishes - GET - get all dishes

##### example request http://localhost:5001/api/dishes?category=Pizza&q=tomatoes&subcategory=Round_pizza - GET - get all dishes with query

##### example request http://localhost:5001/api/dishes?subcategory=Juice,Wine - GET - get all dishes with query

##### allowed query: category, subcategory, q (search string)

#### example request http://localhost:5001/api/dishes - POST - create 1 dish /

#### example request http://localhost:5001/api/dishes - PUT - update 1 dish / id in body - required in this request

#### example request http://localhost:5001/api/dishes/6453fe613b229fb1d201d915 - GET 1 dish by ID

#### example request http://localhost:5001/api/dishes/6453ff148ac78a327c1fe933 - DELETE 1 dish by ID

---

## TABLES (reservation)

> ##### Get all tables info
>
> GET - http://localhost:5001/api/tables

<details><summary>response example</summary>

```
[
    {
        "number": "T-01",
        "tableLimit": 6,
        "reserved": false,
        "reservationInfo": [],
        "id": "645fc5914684cada592ce0b0"
    },
    {
        "number": "T-02",
        "tableLimit": 6,
        "reserved": false,
        "reservationInfo": [
            {
                "date": "2023-05-13",
                "time": "18:00",
                "clientName": "TEST",
                "phoneNumber": "675871098012",
                "email": "kjhask@gmail.com",
                "visitTag": "bdaaday",
                "notes": "ajwoidhawiudhawi",
                "id": "645fcf78c69d6a01d0e04298"
            },
            {
                "date": "2023-05-13",
                "time": "18:00",
                "clientName": "TEST",
                "phoneNumber": "675871098012",
                "email": "kjhask@gmail.com",
                "visitTag": "bdaaday",
                "notes": "ajwoidhawiudhawi",
                "id": "645fcf7ac69d6a01d0e0429a"
            }
        ],
        "id": "645fc59a4684cada592ce0b2"
    },
]

```

</details>

> ##### Get All free tables
>
> GET - http://localhost:5001/api/tables/free

<details><summary>response example</summary>

```
[
    {
        "number": "T-01",
        "id": "645fc5914684cada592ce0b0"
    },
    {
        "number": "T-03",
        "id": "645fc5ea4684cada592ce0b4"
    },
    {
        "number": "T-04",
        "id": "645fc5ef4684cada592ce0b6"
    },
    {
        "number": "T-05",
        "id": "645fc5f44684cada592ce0b8"
    },
    {
        "number": "T-06",
        "id": "645fc5f84684cada592ce0ba"
    },

]

```

</details>

> ##### Get the reservation `time` for a specific table for the current date by `table id`
>
> GET - http://localhost:5001/api/tables/reservation/6459612787a543d932c11031

<details><summary>response example</summary>

```
{
    "message": "Table T-01 is currently reserved for the following hours:",
    "tableReservations": [
        "16:00"
    ]
}

or

{
    "message": "No reservations for this table"
}

```

</details>

> ##### Change table `status` by `table id`
>
> PUT - http://localhost:5001/api/tables/6459612787a543d932c11031

> ##### Add new `table`
>
> POST - http://localhost:5001/api/tables

<details><summary>body example</summary>

```
{
    "number": "T-12",
    "tableLimit": 2
}

```

</details>

> ##### Add `new reservation` info to the table by `table id`
>
> POST - http://localhost:5001/api/tables/reservation/6459612787a543d932c11031

<details><summary>body example</summary>

```
{
    "date": "2023-05-010",
    "time": "10:00",
    "clientName": "Olexandr",
    "phoneNumber": "123",
    "email": "kjhask@gmail.com",
    "visitTag": "bday",
    "notes": "ajwoidhawiudhawi"
}

```

</details>

> ##### Delete `reservation` info from the table by `reservation id` and `table number`
>
> DELETE - http://localhost:5001/api/tables/reservation/T-01/6459612787a543d932c11034

> ##### Delete `table` by `table id`
>
> DELETE - http://localhost:5001/api/tables/6459612787a543d932c11031

---

## ORDERS

#### example request http://localhost:5001/api/orders - GET - get all orders

#### allowed query: type -- http://localhost:5001/api/orders/?orderType=delivery,takeAwyay

#### You can pass "limit" and "skip" params to limit and skip the results for pagination, http://localhost:5001/api/orders/?orderType=delivery,takeAwyay&page=2&limit=1

##### orderType: .pattern(/^takeaway|delivery|dine-in$/)

#### example request http://localhost:5001/api/orders/645e2c4a66bbb2ae16af76e3 - GET - get one order by id

#### example request http://localhost:5001/api/orders - POST - create one order

    {
        "orderType": "delivery",
                "orderNumber": 10,

        "dishes":   [
        {
            "dishID": "645a8c14bdac7211baf9aa07",
            "amount": 2

        },
        {
            "dishID": "645a8c14bdac7211baf9aa1f",
            "amount": 1

        }
    ],
        "description": "fffffffffff",
        "table": "T-05"

    }

#### example request http://localhost:5001/api/orders - PUT - update one order

#### example request http://localhost:5001/api/orders/645e2c4a66bbb2ae16af76e3 - DELETE - get one order by id

---

## BILLS

#### example request http://localhost:5001/api/bills - GET - get all bills

#### allowed query: type, status -- http://localhost:5001/api/bills/?orderType=delivery,dineIn&status=opened

#### You can pass "limit" and "skip" params to limit and skip the results for pagination, http://localhost:5001/api/bills/?orderType=delivery,dineIn&status=opened&page=2&limit=1

##### orderType: .pattern(/^takeaway|delivery|dine-in$/)

##### status pattern(/^opened|closed$/)

#### example request http://localhost:5001/api/bills/646fb293a608de2216974150- GET - get one bill by id

#### example request http://localhost:5001/api/bills - POST - create one bill

#### example request http://localhost:5001/api/bills - PUT - update one bill

#### example request http://localhost:5001/api/bills/645e2c4a66bbb2ae16af76e3 - DELETE - get one bill by id

#### example request send bills to email - http://localhost:5001/api/bills/send/647a68a7771be4d87ba4b2e0

## DELIVERY

#### example request http://localhost:5001/api/delivery - GET - get all deliveries

#### example request http://localhost:5001/api/delivery/646fb293a608de2216974150- GET - get one delivery by id

#### example request http://localhost:5001/api/delivery - POST - create one delivery

#### example request http://localhost:5001/api/delivery - PUT - update one delivery

#### example request http://localhost:5001/api/delivery/645e2c4a66bbb2ae16af76e3 - DELETE - get one delivery by id

#### example request send message to telegram - http://localhost:5001/api/delivery/send/64974cf249d97e2d3739d1d1

##### possible answer : "message to 380983648252 was sent" // "the client`s number was not found in telegram DB"

##### !!!!!!!!! client have to share his / her contact

##### https://t.me/FoodDashBot
