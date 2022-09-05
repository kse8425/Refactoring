const aPerson = require('../ex1_RF').aPerson;

test('ch7.2 ch1', () => {
  nameOfCourses = aPerson.courses.map((c) => c.name);
  expect(nameOfCourses).toEqual(['영어', '영어2', '수학', '수학2']);
});
