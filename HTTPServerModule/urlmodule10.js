// URL Module

//1 
{
    const http = require('http')
    const url = require('url')

    http.createServer((req, res) => {
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


//2
{
    var http = require('http')
    var url = require('url')
    var adr = 'http://localhost:8002/default.htm?year=2017&month=february';


    http.createServer((req, res) => {
        var q = url.parse(adr, true)
        console.log(adr)
        console.log('This is address:-', q)
        if (!adr) {
            res.writeHead(400, { 'Content-Type': 'text/html' })
            return res.end('fcuk you')
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(`<h1>${adr}</h1>
            <h2>Host:- ${q.host}</h2>
            <h2>Hostname:- ${q.hostname}</h2>
            <h2>Port:- ${q.port}</h2>
            <h2>Search:- ${q.search}</h2>
            <h2>Path:- ${q.path}</h2>
            <h2>Href:- ${q.href}</h2>`)
            return res.end('OKAY')
        }
    }).listen(8002)

}


//3
{
    const http = require('http')
    const url = require('url')

    http.createServer((req, res) => {
        let U = req.url;
        var M = url.parse(U, true)
        console.log(U, req.rawHeaders[1])
        res.write(`<h1>${U}</h1>
        <h2>Host:- ${M.host}</h2>
        <h2>Hostname:- ${M.hostname}</h2>
        <h2>Port:- ${M.port}</h2>
        <h2>Search:- ${M.search}</h2>
        <h2>Path:- ${M.path}</h2>
        <h2>Href:- ${M.href}</h2>`)
        res.end()
    }).listen(8003)
}
