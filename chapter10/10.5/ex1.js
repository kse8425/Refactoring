class Site {
  set customer(arg) {
    this._customer = arg;
  }
  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get billingPlan() {
    return this._billingPlan;
  }
  set billingPlan(arg) {
    this._billingPlan = arg;
  }
  get paymentHistory() {
    return this._paymentHistory;
  }
  toString() {
    return this.name;
  }
}

function client1(aCustomer) {
  //...수많은 코드 ...
  let customerName;
  if (aCustomer === '미확인 고객') customerName = '거주자';
  else customerName = aCustomer.name;
  return customerName;
}

const registry = { billingPlans: { basic: '기본요금' } };

function client2(aCustomer) {
  const plan = aCustomer === '미확인 고객' ? registry.billingPlans.basic : aCustomer.billingPlan;
  return plan;
}

function client3(aCustomer) {
  if (aCustomer !== '미확인 고객') aCustomer.billingPlan = 'newPlan';
  return aCustomer.billingPlan;
}

function client4(aCustomer) {
  const weeksDelinquent = aCustomer === '미확인 고객' ? 0 : aCustomer.paymentHistory;
  return weeksDelinquent;
}

module.exports = { client1, client2, client3, client4, Customer, Site };
