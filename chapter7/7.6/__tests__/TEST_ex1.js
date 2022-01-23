const TrackingInformation = require('../ex1_RF').TrackingInformation;
const Shipment = require('../ex1_RF').Shipment;

const shipment = new Shipment();
const COMPANY_NAME = 'Logen';
shipment.shippingCompany = COMPANY_NAME;
shipment.trackingNumber = '111222333';

test('TrackingInformation Test', () => {
  expect(shipment.shippingCompany).toBe(COMPANY_NAME);
  expect(shipment.trackingNumber).toBe('111222333');
});

test('Shipment Test', () => {
  expect(shipment.trackingInfo).toBe(`${COMPANY_NAME}: 111222333`);
});

// ====== BEFORE Refactoring ======

// const TrackingInformation = require('../ex1').TrackingInformation;
// const Shipment = require('../ex1').Shipment;

// const shipment = new Shipment();
// const macbook = new TrackingInformation();
// const COMPANY_NAME = 'Logen';
// shipment.trackingInformation = macbook;
// shipment.trackingInformation.shippingCompany = COMPANY_NAME;
// shipment.trackingInformation.trackingNumber = '111222333';

// test('TrackingInformation Test', () => {
//   expect(macbook.shippingCompany).toBe(COMPANY_NAME);
//   expect(macbook.trackingNumber).toBe('111222333');
//   expect(macbook.display).toBe(`${COMPANY_NAME}: 111222333`);
// });

// test('Shipment Test', () => {
//   expect(shipment.trackingInfo).toBe(`${COMPANY_NAME}: 111222333`);
// });
