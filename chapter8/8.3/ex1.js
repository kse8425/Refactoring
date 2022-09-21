function renderPerson(person) {
  const result = [];
  result.push(`이름 : ${person.name}`);
  result.push(`제목 : ${person.photo.title}`);
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

function photoDiv(p) {
  return ['<div>', `제목 : ${p.title}`, emitPhotoData(p), '</div>'].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`위치 : ${aPhoto.location}`);
  result.push(`날짜 : ${aPhoto.date}`);
  return result.join('\n');
}

module.exports = { renderPerson, photoDiv };
