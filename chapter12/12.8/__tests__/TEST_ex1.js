const Employee = require('../ex1_RF').Employee;
const Department = require('../ex1_RF').Department;

test('12.8 ex1 Employee', () => {
  const kse = new Employee('김성은', 1, 10000);
  expect(kse.name).toBe('김성은');
  expect(kse.id).toBe(1);
  expect(kse.monthlyCost).toBe(10000);
  expect(kse.annualCost).toBe(120000);
});

test('12.8 ex1 Department', () => {
  const kse = new Employee('김성은', 1, 10000);
  const lsn = new Employee('이시내', 2, 12000);
  const ksr = new Employee('김사랑', 3, 15000);
  const khm = new Employee('김희망', 4, 8000);
  const staff = [kse, lsn, ksr, khm];
  const aDepartment = new Department('우리집', staff);

  expect(aDepartment.name).toBe('우리집');
  expect(aDepartment.staff).toMatchObject(staff);
  expect(aDepartment.monthlyCost).toBe(45000);
  expect(aDepartment.headCount).toBe(4);
  expect(aDepartment.annualCost).toBe(540000);
});
