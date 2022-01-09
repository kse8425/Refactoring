const client1 = require("../ex1_RF").client1;
const client2 = require("../ex1_RF").client2;
const client3 = require("../ex1_RF").client3;

test("ch6.10 - TEST", () => {
  expect(client1()).toBe(7000);
  expect(client2()).toBe(6000);
  expect(client3()).toBe(7000);
});
