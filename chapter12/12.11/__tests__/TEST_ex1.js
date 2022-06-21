const Scroll = require('../ex1_RF').Scroll;
const LocalDate = require('@js-joda/core').LocalDate;

const id = '#123';
const title = '고대 스크롤';
const tags = ['revered', 'saved', 'ancient'];
const dateLastCleaned = LocalDate.parse('2021-08-24');
const dateNow = LocalDate.parse('2021-12-24');

test('ch12.11 ex1', () => {
  const aScroll = new Scroll(id, title, tags, dateLastCleaned);
  expect(aScroll.id).toBe('#123');
  expect(aScroll.title).toBe('고대 스크롤');
  expect(aScroll.hasTag('saved')).toBe(true);
  expect(aScroll.hasTag('good')).toBe(false);
  expect(aScroll.daysSinceLastCleaning(dateNow)).toBe(122);
  expect(aScroll.needsCleaning(dateNow)).toBe(false);
});
