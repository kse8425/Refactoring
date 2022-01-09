const reading = { customer: "vian", quantity: 10, month: 5, year: 2017 };
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

function client1() {
  const aReading = acquireReading();
  const baseCharge =
    baseRate(aReading.month, aReading.year) * aReading.quantity;
  return baseCharge; //7000
}

function client2() {
  const aReading = acquireReading();
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
  return taxableCharge; //6000
}
function client3() {
  const aReading = acquireReading();
  const basicChargeAmount = calculateBaseCharge(aReading);
  function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
  return basicChargeAmount; //7000
}
module.exports = { client1, client2, client3 };
