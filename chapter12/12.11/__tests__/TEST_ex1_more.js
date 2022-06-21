const Scroll = require('../ex1_RF_more').Scroll;
const CatalogItem = require('../ex1_RF_more').CatalogItem;
const LocalDate = require('@js-joda/core').LocalDate;

const dateNow = LocalDate.parse('2021-12-24');

test('스크롤 데이터 읽기', () => {
  const aDocument = [
    {
      id: '#123',
      catalogData: {
        id: '#123',
        title: '석화병 카탈로그',
        tags: ['revered', 'saved', 'ancient', 'first'],
      },
      lastCleaned: '2021-08-24',
    },
  ];
  const catalog = new Map();
  catalog.set('#123', new CatalogItem('#123', '석화병 카탈로그', ['revered', 'saved', 'ancient', 'first']));

  const scrolls = aDocument.map(
    (record) => new Scroll(record.id, LocalDate.parse(record.lastCleaned), record.catalogData.id, catalog)
  );
  const aScroll = scrolls[0];
  expect(aScroll.id).toBe('#123');
  expect(aScroll.title).toBe('석화병 카탈로그');
  expect(aScroll.hasTag('saved')).toBe(true);
  expect(aScroll.hasTag('good')).toBe(false);
  expect(aScroll.daysSinceLastCleaning(dateNow)).toBe(122);
  expect(aScroll.needsCleaning(dateNow)).toBe(false);
});
