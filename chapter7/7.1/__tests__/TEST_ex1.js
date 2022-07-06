const organization = require('../ex1_RF');

test('ch7.1 ex1', () => {
  expect(organization().name).toBe('애크미 구스베리');

  organization().name = 'kse';
  expect(organization().name).toBe('kse');
});
