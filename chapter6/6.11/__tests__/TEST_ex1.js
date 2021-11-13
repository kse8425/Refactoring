priceOrder = require("../ex1_RF");

apple = {
  basePrice: 6000,
  discountThreshold: 2,
  discountRate: 0.1,
};

ship = {
  discountThreshold: 5000,
  discountedFee: 2000,
  feePerCase: 5000,
};

test("priceOrder", () => {
  expect(priceOrder(apple, 5, ship)).toBe(38200);
});
