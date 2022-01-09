var _ = require("lodash");
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
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function client1() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const baseCharge = aReading.baseCharge;
  return baseCharge; //7000
}

function client2() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const taxableCharge = aReading.taxableCharge;
  return taxableCharge; //6000
}
function client3() {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
  return basicChargeAmount; //7000
}
function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableChargeq = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
}
module.exports = { client1, client2, client3 };
