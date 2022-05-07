const data = require('../data');
const acquireData = require('../ex1_RF');
const result = [
  { city: 'Bangalore', phone: '+91 80 4064 9570' },
  { city: 'Chennai', phone: '+91 44 660 44766' },
];

test('8.8 ex1', () => {
  expect(acquireData(data)).toEqual(result);
});
