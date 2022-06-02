const Person = require('../ex1_RF').Person;
const Department = require('../ex1_RF').Department;

const aPerson = new Person();
const aDepartment = new Department();
aDepartment.manager = 'SaRang';
aPerson.department = aDepartment;

test('ch7.7', () => {
  expect(aPerson.manager).toBe('SaRang');
});
