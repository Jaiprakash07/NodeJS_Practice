// Path Module 
// These module is used for working file path and directory paths.

{
    const path = require('path')

    console.log(path.dirname('D:/NodeJS/PathModule/pathmod5.js'))         // return directory name's path
    console.log(path.extname('D:/NodeJS/PathModule/pathmod5.js'))         // return an extension name's path
    console.log(path.basename('D:/NodeJS/PathModule/pathmod5.js'))        // return base name's path

    console.log(path.parse('D:/NodeJS/PathModule/pathmod5.js'))           // return an object from path

    const mypath = path.parse('D:/NodeJS/PathModule/pathmod5.js')         // return extension name's path
    // console.log(mypath.root)
    // console.log(mypath.dir)
    // console.log(mypath.base)
    // console.log(mypath.name)

    const myformat = path.format({                                        // return a path string from an object 
        root: 'D:/',
        dir: 'D:/NodeJS/DemoPath',
        base: 'demopath.js',
        ext: '.js',
        name: 'demopath'
    })

    console.log(myformat)

    console.log(path.normalize('D:/NodeJS/DemoPath/demopath.js'))        // return a path string with clearing double segment // or \\ or triple segment \\\ or /// or dots .. or . etc in correct order

}