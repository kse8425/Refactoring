let defaultOwner = { firstName: "마틴", lastName: "파울러" };
class spaceship {}
spaceship.owner = defaultOwner;
defaultOwner = { firstName: "레베카", lastName: "파슨스" };

console.log(spaceship.owner); //{ firstName: "마틴", lastName: "파울러" }
console.log(defaultOwner); //{ firstName: "레베카", lastName: "파슨스" }
