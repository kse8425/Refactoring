const Order = require('../ex2_RF');

test('ch6.3 ex2 under 500', () => {
  record = {
    quantity: 490,
    itemPrice: 5000,
  };
  anOrder = new Order(record);
  expect(anOrder.price).toBe(2450100);
});

test('ch6.3 ex2 more 500', () => {
  record = {
    quantity: 510,
    itemPrice: 5000,
  };
  anOrder = new Order(record);
  expect(anOrder.price).toBe(2547600);
});
