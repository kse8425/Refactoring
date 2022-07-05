const assert = require('assert');
class Book {
  constructor(reservation) {
    this._reservation = reservation;
  }

  get reservation() {
    return this._reservation;
  }

  addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservation.push(customer);
  }

  zz_addReservation(customer, isPriority) {}
}

module.exports = Book;
