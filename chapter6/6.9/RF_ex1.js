reading = { customer: "vian", quantity: 10, month: 5, year: 2017 };
function baseRate(aMonth, aYear) {
  if (aYear > 2010) {
    return aMonth > 6 ? 500 : 700;
  } else return 0;
}
function acquireReading() {
  return reading;
}
function taxThreshold() {
  return 1000;
}

class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }
  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }

  get taxableCharge() {
    return Math.max(0, this.baseCharge - taxThreshold(this.year));
  }
}

// Client 1
{
  rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const baseCharge = aReading.baseCharge;
  console.log(baseCharge); //7000
}

// Client 2
{
  rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const taxableCharge = aReading.taxableCharge;
  console.log(taxableCharge); //6000
}

// Client 3
{
  rawReading = acquireReading();
  const aReading = new Reading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
  console.log(basicChargeAmount); //7000
}
