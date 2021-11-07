import { defaultOwner } from "./defaultOwner.js";
import { setDefaultOwner } from "./defaultOwner.js";

class spaceship {}
spaceship.owner = defaultOwner();
setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });

console.log(spaceship.owner); //{ firstName: "마틴", lastName: "파울러" }
console.log(defaultOwner()); //{ firstName: "레베카", lastName: "파슨스" }
