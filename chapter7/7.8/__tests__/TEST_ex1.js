const Person = require('../ex1_RF').Person;
const Department = require('../ex1_RF').Department;

const aPerson = new Person();
const aDepartment = new Department();
aDepartment.manager = 'SaRang';
aPerson.department = aDepartment;

test('ch7.8', () => {
  expect(aPerson.department.manager).toBe('SaRang');
  // expect(1 + 1).toBe(2);
});
