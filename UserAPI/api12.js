// API (Application Programming Interface)

// A Software intermediary that allows two applications to talk to each other.
// APIs are an accessible way to share data within and across organization.

//1. Create API and showing data at port 8085.
{
    const http = require('http')
    const fs = require('fs')

    http.createServer((req, res) => {
        const data = fs.readFileSync('apidata.json', 'utf-8')                    // Always create .json file for apiraw data or its become html file data 
        // console.log(data)
        if (req.url === '/apidata') {
            res.writeHead(200, { 'Content-Type': 'application/json' })           // For JSON file data use this type declaration
            const newob = JSON.parse(data).map((name) => {
                res.write(`${name.id}- `)
                res.write(`${name.name}, `)
            })
            res.end()
        }
        else if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('Home Page')
            res.end()
        }
        else {
            res.writeHead(400, { 'Content-Type': 'text/plain' })
            res.write('404 error found')
            res.end()
        }
    }).listen(8085)
}