const reportLines = require('../ex1_RF');
const customer = {
  name: '김성은',
  location: '숲속마을',
};
const answer = [
  ['name', '김성은'],
  ['location', '숲속마을'],
];
test('6.2 ex1', () => {
  expect(reportLines(customer)).toEqual(answer);
});
