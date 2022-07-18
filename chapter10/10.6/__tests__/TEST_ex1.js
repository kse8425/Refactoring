const Customer = require('../ex1_RF');

test('ch10.6 ex1', () => {
  const aCustomer = new Customer();
  // discountRate가 없을 때
  expect(aCustomer.applyDiscount(1000)).toBe(1000);

  aCustomer.discountRate = 0.3;
  expect(aCustomer.applyDiscount(1000)).toBe(700);
});
