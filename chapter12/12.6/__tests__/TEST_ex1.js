const createEmployee = require('../ex1_RF.js').createEmployee;
const kim = createEmployee('kim', 'engineer');

const lee = createEmployee('lee', 'manager');
const sarang = createEmployee('sarang', 'salesperson');
test('12.6 ex1', () => {
  expect(kim.toString()).toBe('kim (engineer)');
  expect(lee.toString()).toBe('lee (manager)');
  expect(sarang.toString()).toBe('sarang (salesperson)');
});
