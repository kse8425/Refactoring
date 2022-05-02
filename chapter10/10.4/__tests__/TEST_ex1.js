const plumages = require('../ex1_RF').plumages;
const speeds = require('../ex1_RF').speeds;

birds = [
  {
    name: '사랑이제비',
    type: '유럽 제비',
  },
  {
    name: '희망이제비',
    type: '아프리카 제비',
    numberOfCoconuts: 3,
  },
  {
    name: '시내제비',
    type: '노르웨이 파랑 앵무',
    voltage: 90,
    isNailed: false,
  },
];

const plumagesResult = new Map();
plumagesResult.set('사랑이제비', '보통이다');
plumagesResult.set('희망이제비', '지쳤다');
plumagesResult.set('시내제비', '예쁘다');

const speedsResult = new Map();
speedsResult.set('사랑이제비', 35);
speedsResult.set('희망이제비', 34);
speedsResult.set('시내제비', 19);

test('10.4 ex1', () => {
  expect(plumages(birds)).toStrictEqual(plumagesResult);
  expect(speeds(birds)).toStrictEqual(speedsResult);
});
