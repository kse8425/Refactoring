const Order = require('../ex1_RF').Order;

test('ch7.4 ex1', () => {
  const item = { name: '신발', price: 3000 };
  const aOrder = new Order(5, item);
  expect(aOrder.price).toBe(14250);
});
