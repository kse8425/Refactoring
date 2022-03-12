class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}
let orders = [];
let data = {};
data.priority = 'high';
orders.push(new Order(data));
data.priority = 'rush';
orders.push(new Order(data));
data.priority = 'low';
orders.push(new Order(data));

const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;

module.exports = highPriorityCount;
