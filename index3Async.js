// fs Modules with Async method or way

// const { isUtf8 } = require('buffer')

//1
{
    let fs = require('fs')

    // fs.writeFile('Asyn.txt', 'This is fs module with async method.', (err) => {    // In async way, we have to pass callback function as a second argu as 
    console.log('Asynchronus way')
    // console.log(err)
    // })
}


//2
{
    let fs = require('fs')

    // fs.appendFile('Asyn.txt', 'Using append mthd with async way', (err) => {      // Append data using asyn way
    console.log('Append data with async way')
    // })
}


//3
{
    let fs = require('fs')

    fs.readFile('Asyn.txt', 'UTF-8', (err, data) => {                                // whenever,using readfile data, we have to pass two argu error and data for to get it.
        console.log(data)
    })
}