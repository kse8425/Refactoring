const alerts = require('../ex1_RF').alerts;

test('6.8 test', () => {
  expect(alerts).toStrictEqual([
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 58, time: '2016-11-10 09:30' },
  ]);
});
