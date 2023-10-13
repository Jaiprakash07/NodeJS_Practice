// URL Module

{
    const http = require('http')
    const url = require('url')
    const addr = 'http://localhost:8001/about'

    http.createServer((req, res) => {
        // console.log(url.parse(addr, true))
        // console.log(url.parse(req.url, true))
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('URl Module, Home Page')
            res.end()
        } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('URl Module, About Page')
            res.end()
        } else if (req.url === '/career') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('URl Module, Career Page')
            res.end()
        } else {
            // res.writeHead(400, { 'Content-Type': 'text/html' })
            res.write('URl Module, 404 error found')
            res.end()
        }
        console.log('DONE')
    }).listen(8001)

}

{
    var fs = require('fs')
    var http = require('http')
    var url = require('url')

    http.createServer((req, res) => {
        var q = url.parse(req.url, true)
        var filename = '.' + q.pathname;
        console.log(filename)
        fs.readFile(filename, (err, data) => {
            if (err) {
                res.writeHead(400, { 'Content-Type': 'text/html' })
                return res.end()
            }
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    }).listen(8002)

}
