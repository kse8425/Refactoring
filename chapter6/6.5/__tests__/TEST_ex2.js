const Book = require('../ex2_RF');

test('6.5 ex2', () => {
  const aBook = new Book([]);
  aBook.addReservation('kse', false);
  aBook.addReservation('lsn', false);
  expect(aBook.reservation).toEqual(['kse', 'lsn']);
});
