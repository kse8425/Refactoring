const rating = require('../ex2_RF');

const voyageOfChina = { zone: '중국', length: 10 };
const voyageOfWestIndia = { zone: '서인도', length: 10 };
const history = [
  { zone: '동인도', profit: 5 },
  { zone: '서인도', profit: 15 },
  { zone: '중국', profit: -2 },
  { zone: '서아프리카', profit: 7 },
];

test('10.4 ex2', () => {
  expect(rating(voyageOfChina, history)).toBe('A');
  expect(rating(voyageOfWestIndia, history)).toBe('B');
});
