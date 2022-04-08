const Employee = require('../ex1_RF2.js');
const kim = new Employee('kim', 'engineer');
const lee = new Employee('Lee', 'manager');
const sarang = new Employee('sarang', 'salesperson');

test('12.6 ex1_2', () => {
  expect(kim.toString()).toBe('kim (Engineer)');
  expect(lee.toString()).toBe('Lee (Manager)');
  expect(sarang.toString()).toBe('sarang (Salesperson)');
});
