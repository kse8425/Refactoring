const ch11_3 = require("../ex1_RF");
const rushDeliveryDate = ch11_3.rushDeliveryDate;
const regularDeliveryDate = ch11_3.regularDeliveryDate;

const onOrder = {
  deliveryState: "",
  placedOn: {
    plusDays(time) {
      return time;
    },
  },
};

test("deliveryDate - MA", () => {
  onOrder.deliveryState = "MA";
  expect(rushDeliveryDate(onOrder)).toBe(2);
  expect(regularDeliveryDate(onOrder)).toBe(4);
});

test("deliveryDate - NY", () => {
  onOrder.deliveryState = "NY";
  expect(rushDeliveryDate(onOrder)).toBe(3);
  expect(regularDeliveryDate(onOrder)).toBe(4);
});

test("deliveryDate - ME", () => {
  onOrder.deliveryState = "ME";
  expect(rushDeliveryDate(onOrder)).toBe(4);
  expect(regularDeliveryDate(onOrder)).toBe(5);
});
