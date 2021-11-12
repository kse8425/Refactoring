distanceTravellend = require("../ex1_RF");
scenario = {
  primaryForce: 100,
  secondaryTime: 50,
  mass: 10,
  delay: 5,
};

test("distanceTravellend", () => {
  expect(distanceTravellend(scenario, 10)).toBe(562.5);
});
