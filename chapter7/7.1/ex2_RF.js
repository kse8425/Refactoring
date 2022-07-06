const _ = require('lodash');

class CustomerData {
  constructor(data) {
    this._data = data;
  }

  usage(customerID, year, month) {
    return this._data[customerID].usages[year][month];
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }
}

let customerData = new CustomerData({
  1920: {
    name: '마틴 파울러',
    id: '1920',
    usages: {
      2016: {
        1: 50,
        2: 55,
        //나머지 달은 생략
      },
      2015: {
        1: 70,
        2: 63,
        //나머지 달은 생략
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: '38673',
    //다른 고객 정보도 같은 형식으로 저장된다.
  },
});

function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  return { laterAmount: later, change: later - earlier };
}

function getCustomerData() {
  return customerData;
}

module.exports = { getCustomerData, compareUsage };
