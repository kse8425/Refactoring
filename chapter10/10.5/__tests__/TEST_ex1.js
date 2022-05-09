const client1 = require('../ex1_RF').client1;
const client2 = require('../ex1_RF').client2;
const client3 = require('../ex1_RF').client3;
const client4 = require('../ex1_RF').client4;
const Customer = require('../ex1_RF').Customer;
const Site = require('../ex1_RF').Site;

const site = new Site();
const siteCustomer = new Site();
site.customer = '미확인 고객';
siteCustomer.customer = new Customer('고객');

test('10.8 ex1', () => {
  expect(client1(site.customer)).toBe('거주자');
  expect(client2(site.customer)).toBe('기본요금');
  expect(client3(siteCustomer.customer)).toBe('newPlan');
  expect(client4(site.customer)).toBe(0);
});
