import assert from "assert";
import { defaultOwner } from "./defaultOwner.js";
const owner1 = defaultOwner();
assert.equal("파울러", owner1.lastName, "처음 값 확인");
const owner2 = defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "owner2 변경 후"); //성공할까??
console.log(owner1);
