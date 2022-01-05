class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(new Date());
    this._setDiscountRate(discountRate);
  }
  get discountRate() {
    return this._contract.discountRate;
  }
  _setDiscountRate(aNumber) {
    this._contract.discountRate = aNumber;
  }
  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
    //다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }
  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}

class Amount {
  constructor(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }
  setPrice(arg) {
    this._price = arg;
  }
  subtract(subtractPrice) {
    this.setPrice(this.price - subtractPrice);
    return this.price;
  }
  multiply(discountRate) {
    return this.price * discountRate;
  }
}

module.exports = { Customer, Amount };
