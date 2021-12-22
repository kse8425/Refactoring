const Person = require("../ex1_RF");

person = new Person();
person.name = "dico";
person.officeAreaCode = "055";
person.officeNumber = "1234";

test("테스트", () => {
  expect(person.name).toBe("dico");
  expect(person.officeAreaCode).toBe("055");
  expect(person.officeNumber).toBe("1234");
  expect(person.telephoneNumber).toBe("(055) 1234");
});
