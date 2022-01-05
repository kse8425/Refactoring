const Account = require("../ex2_RF").Account;
const AccountType = require("../ex2_RF").AccountType;
const plus = new AccountType("plusAccount", 2.5);
const lala = new Account(8407, plus);

test("AccountType", () => {
  expect(lala.interestRate).toBe(2.5);
});
