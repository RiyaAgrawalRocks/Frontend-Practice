// module import file
// default import
import multiply from "./mathOperationsM.js";

console.log(multiply(2, 2));
//named import
import { add, subtract } from "./mathOperationsM.js";
console.log(multiply(2, 2));
console.log(add(2, 2));

