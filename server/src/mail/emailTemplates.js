export const billEmail = ({ totalPrice, orderNumber, dishes }) => {
    const dishesView = dishes
        .map(
            ({ title, price, amount }) => `
    <tr>
    <td>${title}</td>
    <td>${amount}</td>
    <td>${price}$</td>
    <td>${amount * price}$</td>
  </tr>    
    `
        )
        .join('');

    return `
    <!DOCTYPE html>
<html>
<head>
  <title>Restaurant Receipt</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
    }
    
    .header {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .title {
      font-size: 24px;
      color: #333333;
      margin: 0;
    }
    
    .invoice-details {
      margin-bottom: 30px;
    }
    
    .table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    
    .table th, .table td {
      border: 1px solid #dddddd;
      padding: 8px;
      text-align: left;
    }
    
    .table th {
      background-color: #f5f5f5;
      font-weight: bold;
    }
    
    .total {
      text-align: right;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
    Hello, dear Customer. There is your bill from FOLKS
    </div>
    
    <div class="invoice-details">
      <p>Invoice Number: ${orderNumber}</p>
    </div>
    
    <table class="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        ${dishesView}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="total">Total:</td>
          <td>${totalPrice}$</td>
        </tr>
      </tfoot>
    </table>
    
    <p>Thank you for dining with us!</p>
    <p>Best regards,</p>
    <p>Your FOLKS Restaurant</p>
  </div>
</body>
`;
};
