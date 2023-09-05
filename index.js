// Learn NodeJS Chapter-1
// Command for running nodejs is node filename with extension like:(node index.js)

console.log("Hi, I'm Jaiprakash,");
console.log("I'm learning NodeJS.");

// http is module, and every module use require method ,create server is http module method and write a function inside the createserve method
{
    let http = require('http')

    http.createServer(function (req, res) {
        res.write('Hello Jai, I am NodeJS')
        res.end();
    }).listen(8080)
}