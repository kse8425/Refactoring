function ch8_7(people) {
  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngest() {
    return Math.min(...people.map((p) => p.age));
  }

  return `최연소: ${youngest()}, 총 급여: ${totalSalary()}`;
}
module.exports = ch8_7;
