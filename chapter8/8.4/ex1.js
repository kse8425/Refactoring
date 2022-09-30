function renderPerson(person) {
  const result = [];
  result.push(`이름 : ${person.name}`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

function photoDiv(p) {
  return ['<div>', emitPhotoData(p), '</div>'].join('\n');
}

function emitPhotoData(aPhoto) {
  return [`제목 : ${aPhoto.title}`, `위치 : ${aPhoto.location}`, `날짜 : ${aPhoto.date}`].join('\n');
}

module.exports = { renderPerson, photoDiv };
