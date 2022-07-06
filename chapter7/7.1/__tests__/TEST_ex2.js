const getCustomerData = require('../ex2_RF').getCustomerData;
const compareUsage = require('../ex2_RF').compareUsage;

test('ch7.1 ex2', () => {
  const customerID = 1920;
  const year = 2016;
  const month = 2;
  expect(getCustomerData().usage(customerID, year, month)).toBe(55);
  getCustomerData().setUsage(customerID, year, month, 60);
  expect(getCustomerData().usage(customerID, year, month)).toBe(60);

  expect(compareUsage(customerID, year, month)).toEqual({ laterAmount: 60, change: -3 });
});
