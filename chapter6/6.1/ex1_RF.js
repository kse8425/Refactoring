function printOwing(invoice) {
  printBanner();

  // 미해결 채무(outstanding)를 계산한다.
  const outstanding = calculateOutstanding(invoice);

  // 마감일 (dueDate)을 기록한다.
  recordDueDate(invoice);

  // 세부 사항을 출력한다.
  printDetails(invoice, outstanding);

  return invoice;
}
function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}
function printBanner() {
  console.log("**********");
  console.log("** 고객채무 **");
  console.log("**********");
}
function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  ).toLocaleDateString();
}
function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate}`);
}
module.exports = printOwing;
