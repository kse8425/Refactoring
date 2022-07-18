const assert = require('node:assert');

class Customer {
  set discountRate(arg) {
    assert(arg === null || arg >= 0);
    this._discountRate = arg;
  }
  applyDiscount(aNumber) {
    if (!this._discountRate) {
      return aNumber;
    } else {
      return aNumber - this._discountRate * aNumber;
    }
  }
}

module.exports = Customer;
