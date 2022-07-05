const inNewEngland = require('../ex3_RF');

test('6.5 ex3 false', () => {
  const customer = {
    address: {
      state: 'KO',
    },
  };
  expect(inNewEngland(customer.address.state)).toBe(false);
});

test('6.5 ex3 true', () => {
  const customer = {
    address: {
      state: 'MA',
    },
  };
  expect(inNewEngland(customer.address.state)).toBe(true);
});
