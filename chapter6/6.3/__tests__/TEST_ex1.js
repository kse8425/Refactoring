const price = require('../ex1_RF');

test('ch6.3 ex1 under 500', () => {
  order = {
    quantity: 490,
    itemPrice: 5000,
  };
  expect(price(order)).toBe(2450100);
});

test('ch6.3 ex1 more 500', () => {
  order = {
    quantity: 510,
    itemPrice: 5000,
  };
  expect(price(order)).toBe(2547600);
});
