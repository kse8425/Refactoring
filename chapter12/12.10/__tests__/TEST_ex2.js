const createBird = require('../ex2_RF');

test('12.10 ex2 Bird', () => {
  const data = { type: '', name: '보통새' };
  const aBird = createBird(data);

  expect(aBird.name).toBe('보통새');
  expect(aBird.plumage).toBe('보통이다');
  expect(aBird.airSpeedVelocity).toBe(null);
});

test('12.10 ex2 EuropeanSwallow', () => {
  const data = { type: '유럽 제비', name: '독일제비' };
  const aEuropeanSwallow = createBird(data);

  expect(aEuropeanSwallow.name).toBe('독일제비');
  expect(aEuropeanSwallow.plumage).toBe('보통이다');
  expect(aEuropeanSwallow.airSpeedVelocity).toBe(35);
});

test('12.10 ex2 AfricanSwallow', () => {
  const data = { type: '아프리카 제비', name: '세네갈제비', numberOfCoconuts: 3 };
  const aAfricanSwallow = createBird(data);

  expect(aAfricanSwallow.name).toBe('세네갈제비');
  expect(aAfricanSwallow.plumage).toBe('보통이다');
  expect(aAfricanSwallow.airSpeedVelocity).toBe(34);
});

test('12.10 ex2 NorwegianBlueParrot', () => {
  const dataVoltageIsNailed = { type: '노르웨이 파랑 앵무', name: '파랑앵무새', voltage: 120, isNailed: true };
  const aNorwegianBlueParrot = createBird(dataVoltageIsNailed);

  expect(aNorwegianBlueParrot.name).toBe('파랑앵무새');
  expect(aNorwegianBlueParrot.plumage).toBe('그을렸다');
  expect(aNorwegianBlueParrot.airSpeedVelocity).toBe(0);

  const dataNoVoltageIsNailed = { type: '노르웨이 파랑 앵무', name: '파랑앵무새', voltage: 90, isNailed: false };
  const aNorwegianBlueParrotNotNailed = createBird(dataNoVoltageIsNailed);

  expect(aNorwegianBlueParrotNotNailed.name).toBe('파랑앵무새');
  expect(aNorwegianBlueParrotNotNailed.plumage).toBe('예쁘다');
  expect(aNorwegianBlueParrotNotNailed.airSpeedVelocity).toBe(19);

  expect(1 + 1).toBe(2);
});
