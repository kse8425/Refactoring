class Person {
  set department(arg) {
    this._department = arg;
  }
  get manager() {
    return this._department.manager;
  }
}

class Department {
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

module.exports = { Person, Department };
