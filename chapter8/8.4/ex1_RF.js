function renderPerson(person) {
  const result = [];
  result.push(`이름 : ${person.name}`);
  result.push(emitPhotoData(person.photo));
  result.push(`위치 : ${person.photo.location}`);

  return result.join('\n');
}

function photoDiv(p) {
  return ['<div>', emitPhotoData(p), `위치 : ${p.location}`, '</div>'].join('\n');
}

function emitPhotoData(p) {
  return [`제목 : ${p.title}`, `날짜 : ${p.date}`].join('\n');
}

module.exports = { renderPerson, photoDiv };
