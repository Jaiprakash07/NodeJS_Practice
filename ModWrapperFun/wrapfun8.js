// Module Wrapper Function 

// Our whole file ('wrapfun8.js') wrap with Wrapper Function. This is called private file or Module Wrapper Function.
// Here, we get 5 parameter 'exports', 'require', 'module', '__filename', '__dirname'. This parameter, we use ByDefault.
// This Wrapper Function is hide in each and every file. This is behind process done by this wrapper function.

// (function (exports, require, module, __filename, __dirname) {
const fs = require('fs')                                       // Here, we are using Wrapper fun's first parameter is import/require
const candidate = 'john cage'
console.log(candidate)

fs.readFile('../Asyn.txt', 'UTF-8', (err, data) => {           // Here, we are using other parameter is module
    console.log(data)
})

module.exports.candidate = candidate;                         // Here, we are using other parameter is exports
console.log(__filename)                                       // Here, we are using other parameter is __filename (double __ hyphen)
console.log(__dirname)                                        // Here, we are using other parameter is __dirname (double __hyphen)
// })()
