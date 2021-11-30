const trackSummary = require("../ex1_RF").trackSummary;
point = [30, 10];
result = { distance: 40, pace: 0.5, time: 1200 };
test("trackSummary", () => {
  expect(trackSummary(point)).toStrictEqual(result);
});
