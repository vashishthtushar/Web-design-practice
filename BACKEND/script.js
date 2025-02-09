// let n = 5;

// for(let i = 0; i < n; i++){
//     console.log("hello :", i);
// }

// let args = process.argv;  

// for (let i=2; i < args.length; i++){
//     console.log("Hello & welcome :", args[i]);
// };

//   // for accessing the data from another file using(module.export  and require() )

// const maths = require("./maths");

// console.log(maths);
// console.log(maths.sum(2,2));
// console.log(maths.mul(5,7));
// console.log(maths.PI);

//  // for accessing the data from another directory using(module.export making in an index.js file and then acessing the  and require() )
//  //(module.export making in an index.js file and then acessing the data using require() from index.js to script.js)

const info = require("./fruits");

console.log(info);