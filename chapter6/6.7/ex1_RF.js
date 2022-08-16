let _title = 'untitled';
let result;

result = `<h1>${title()}</h1>`;

function title() {
  return _title;
}
function setTitle(arg) {
  _title = arg;
}

module.exports = { result, title, setTitle };
