class Site {
  set customer(arg) {
    this._customer = arg;
  }
  get customer() {
    return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer;
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

  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }
  get name() {
    return '거주자';
  }
  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {}
  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

function client1(aCustomer) {
  //...수많은 코드 ...
  const customerName = aCustomer.name;
  return customerName;
}

const registry = { billingPlans: { basic: '기본요금' } };

function client2(aCustomer) {
  const plan = aCustomer.billingPlan;
  return plan;
}

function client3(aCustomer) {
  aCustomer.billingPlan = 'newPlan';
  return aCustomer.billingPlan;
}

function client4(aCustomer) {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
  return weeksDelinquent;
}

module.exports = { client1, client2, client3, client4, Customer, Site };
