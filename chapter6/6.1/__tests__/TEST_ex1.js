const printOwing = require("../ex1_RF");

invoice = {
  customer: "길동",
  orders: [(tenet = { amount: 5000 }), (inseption = { amount: 10000 })],
};
const today = new Date();
ans = {
  customer: "길동",
  dueDate: new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  ).toLocaleDateString(),
  orders: [{ amount: 5000 }, { amount: 10000 }],
};
test("printOwing TEST", () => {
  expect(printOwing(invoice)).toStrictEqual(ans);
});
