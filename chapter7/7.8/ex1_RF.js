class Person {
  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
}

class Department {
  set manager(arg) {
    this._manager = arg;
  }
  get manager() {
    return this._manager;
  }
}

module.exports = { Person, Department };
