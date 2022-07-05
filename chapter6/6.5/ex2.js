class Book {
  constructor(reservation) {
    this._reservation = reservation;
  }
  addReservation(customer) {
    this._reservation.push(customer);
  }
  get reservation() {
    return this._reservation;
  }
}

module.exports = Book;
