// HTTP Module/Web Module

// HTTP Module can create an HTTP server that listens to server ports and gives a response back to client.
// The http.createServer() method includes request and response parameter.
// The request object can be used to get information about the current HTTP request, For.ex:- url, request header and data.
// The response object can be used to send a response for a current HTTP request.
// If the response form the HTTP server is supposed to be displayed as HTML.
// You should include an HTTP header with the correct content type.

const http = require('http')

http.createServer((request, response) => {
    // response.write('Hello, creating server!')
    response.end('Hello, creating server 1234585 ')
    // console.log('I am creating server')
    // response.end()
}).listen(8080)