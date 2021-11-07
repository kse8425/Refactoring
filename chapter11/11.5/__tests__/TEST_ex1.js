var Order = require("../ex1_RF");

test("fianlPrice discountedLevel 2", () => {
  var order = new Order(200, 10);
  expect(order.finalPrice).toBe(1800);
});
test("fianlPrice discountedLevel 1", () => {
  var order = new Order(99, 10);
  expect(order.finalPrice).toBe(940.5);
});
