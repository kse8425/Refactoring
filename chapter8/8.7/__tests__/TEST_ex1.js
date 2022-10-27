const ch8_7 = require('../ex1_RF');

test('ch8.7 ex1', () => {
  const people = [];
  people.push({ age: 18, salary: 20000 });
  people.push({ age: 25, salary: 30000 });
  people.push({ age: 20, salary: 10000 });
  people.push({ age: 30, salary: 50000 });
  expect(ch8_7(people)).toBe('최연소: 18, 총 급여: 110000');
});
