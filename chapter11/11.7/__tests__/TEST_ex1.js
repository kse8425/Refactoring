const Person = require('../ex1_RF');

test('ch11.7 ex1', () => {
  const kim = new Person('1234');
  kim.name = 'sungeun';

  expect(kim.name).toBe('sungeun');
  expect(kim.id).toBe('1234');
});
