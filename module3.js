//modules or core modules

// 1
{
    let fs = require('fs')

    fs.writeFileSync('readwrite.txt', 'create and write content in read.txt file by the help of fs(file system) module:-Hyy jai,')   // fs module for create file and write content as sync way.
    fs.appendFileSync('readwrite.txt', ' I am learning nodeJS')        // fs module for apppend data in exist file.
}


// 2
{
    let fs = require('fs')

    let buf_data = fs.readFileSync('readwrite.txt')       // fs module for read file as synchronus way.
    console.log(buf_data)                                 // buffer data type in nodejs not exists in javascript, shows data in binary form.

    org_data = buf_data.toString()
    console.log(org_data)
}


// 3
{
    let fs = require('fs')
    fs.renameSync('readwrite.txt', 'readWrite.txt')       // fs module for rename file with sync way.
    // fs.mkdirSync('Challenge1')                         // fs module for create folder
}


// 4
{
    let http = require('http')                                          // http module with createserver method is creating http server that listen to server port 8081 and give response to cilent    

    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' })             // writeHead define HTTP header with their content type
        res.write('fs, http, both are module')                          // write our content
        res.write(req.url)                                              // request argument carry url from client 
        res.end();                                                      // end() method is must
    }).listen(8081)
}


// 5 
{
    let fs = require('fs')
    let http = require('http')

    http.createServer(function (req, res) {
        fs.readFile('readWrite.txt', function (err, data) {             // fs module using readFile method by http createserver mtd
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end();
        })
    })
    // }).listen(8080)
}


// 6
{
    let fs = require('fs')

    fs.open('bio.txt', 'w', function (err) {
        if (err) throw err;
        console.log('OPEN File SYSTEM')
    })
}


// 7
{
    
}