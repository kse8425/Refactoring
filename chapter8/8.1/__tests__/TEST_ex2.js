const Account = require("../ex2_RF");
account = new Account();
test("Account test", () => {
  expect(account.bankCharge).toBe(14.5);
});
