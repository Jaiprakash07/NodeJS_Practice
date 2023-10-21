// Stream Module 

// (It is used for getting and passing Live data. It can be text, video etc.)

// Stream module comes in fs(file system) module method 'createReadStream' and 'createWriteStream', So we doesn't need to require it.
// Streams are the objects that facilitate(simplify) you to read data from source and write data to destination.
// Four type streams:- 'Readable', 'Writable', 'Duplex', 'Transform' streams.
// Each type of stream performs several events at different times:- 'Data', 'End', 'Error', 'Finish' events.

//1
{
    const fs = require('fs')
    const http = require('http')
    const readStream = fs.createReadStream('input.txt')                     // Create a Readable Stream

    const myServer = http.createServer((req, res) => {
        readStream.on('data', (chunkdata) => {                              // Handle stream events- 'data',this event is fired when data is available for read.
            // res.writeHead(200, { 'Content-Type': 'text/html'})
            res.write(chunkdata)
        })

        readStream.on('end', () => {                                        // Handle stream events- 'end',this event is fired when no data is available for read.
            res.end()
        })

        readStream.on('error', () => {                                      // Handle stream events- 'error',this event is fired when there is error receive.
            // res.write('ERROR FOUND')
            res.end('ERROR')
        })
    })

    myServer.listen(8008)
}


//2
{
    const fs = require('fs')
    const http = require('http')
    const data = 'I am writing data using write stream in output.txt'
    const writeStream = fs.createWriteStream('output.txt')

    http.createServer((req, res) => {
        writeStream.write(data, 'utf-8')
        writeStream.end()

        writeStream.on('error', () => {
            res.end('error')
        })

        writeStream.on('finish', () => {
            console.log('finished')
        })
    }).listen(8009)
}


//3
{
    const fs = require('fs')
    const http = require('http')
    const RStream = fs.createReadStream('input.txt')

    http.createServer((req, res) => {
        RStream.pipe(res)
    }).listen(8085)
}