const circumference = require('../ex1_RF2');

test('6.5 ex1', () => {
  expect(Math.round(circumference(2))).toBe(13);
});
