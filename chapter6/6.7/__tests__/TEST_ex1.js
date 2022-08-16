let result = require('../ex1_RF').result;
const setTitle = require('../ex1_RF').setTitle;
const title = require('../ex1_RF').title;

test('ch6.7 ex1', () => {
  expect(result).toBe('<h1>untitled</h1>');
});

test('ch6.7 ex1 result change', () => {
  const obj = { articleTitle: '충격! 변수가 이름을 바꾸다' };
  setTitle(obj['articleTitle']);
  result = `<h1>${title()}</h1>`;

  expect(result).toBe('<h1>충격! 변수가 이름을 바꾸다</h1>');
});
