const client1 = require("../ex1").client1;
const client2 = require("../ex1").client2;
const client3 = require("../ex1").client3;

test("ch6.9 - TEST", () => {
  //   const rawReading = acquireReading();
  //   const aReading = new Reading(rawReading);
  //   const baseCharge = aReading.baseCharge;
  expect(client1()).toBe(7000);
  expect(client2()).toBe(6000);
  expect(client3()).toBe(7000);
});
