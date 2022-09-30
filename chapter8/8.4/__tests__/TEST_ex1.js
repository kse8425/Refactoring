const renderPerson = require('../ex1').renderPerson;
const photoDiv = require('../ex1').photoDiv;

test('ch8.4 ex1', () => {
  const aPhoto = {
    title: '날씨 좋은 날',
    location: '경주',
    date: '20-07-08',
  };
  const aPerson = { name: 'Love', photo: aPhoto };
  expect(renderPerson(aPerson)).toBe('이름 : Love\n제목 : 날씨 좋은 날\n위치 : 경주\n날짜 : 20-07-08');
  expect(photoDiv(aPhoto)).toBe('<div>\n제목 : 날씨 좋은 날\n위치 : 경주\n날짜 : 20-07-08\n</div>');
});
