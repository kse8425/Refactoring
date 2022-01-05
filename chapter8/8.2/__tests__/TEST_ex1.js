const Customer = require("../ex1_RF").Customer;
const Amount = require("../ex1_RF").Amount;

const lala = new Customer("lala", 0.05);
const book = new Amount(5000);

test("Customer 테스트", () => {
  expect(lala.discountRate).toBe(0.05);
  lala.becomePreferred();
  expect(lala.discountRate).toBe(0.08);
  expect(lala.applyDiscount(book)).toBe(4600);
});
