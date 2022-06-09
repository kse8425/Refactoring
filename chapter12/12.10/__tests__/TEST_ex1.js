const createBooking = require('../ex1_RF').createBooking;
const createPremiumBooking = require('../ex1_RF').createPremiumBooking;

const show = { talkback: '1h', price: 10000 };
const data = {};
const extras = { premiumFee: 5000, dinner: 'beef' };

test('12.10 Booking', () => {
  const aBooking = createBooking(show, data);
  expect(aBooking.hasTalkback).toBe(true);
  expect(aBooking.basePrice).toBe(10000);

  aBooking.isPeakDay = true;
  expect(aBooking.hasTalkback).toBe(false);
  expect(aBooking.basePrice).toBe(11500);
});

test('12.10 PremiumBooking', () => {
  const aPreBooking = createPremiumBooking(show, data, extras);
  expect(aPreBooking.hasTalkback).toBe(true);
  expect(aPreBooking.basePrice).toBe(15000);
  expect(aPreBooking.hasDinner).toBe(true);

  aPreBooking.isPeakDay = true;
  expect(aPreBooking.hasTalkback).toBe(true);
  expect(aPreBooking.basePrice).toBe(16500);
  expect(aPreBooking.hasDinner).toBe(false);
});
