//modules or core modules

{
    let fs = require('fs')

    fs.writeFileSync('readwrite.txt', 'create and write content in read.txt file by the help of fs(file system) module:-Hyy jai,')   // fs module for create file and write content as sync way.
    fs.appendFileSync('readwrite.txt', ' I am learning nodeJS')        // fs module for apppend data in exist file.
}


{
    let fs = require('fs')

    let buf_data = fs.readFileSync('readwrite.txt')        // fs module for read file as synchronus way.
    console.log(buf_data)                                 // buffer data type in nodejs not exists in javascript, shows data in binary form.

    org_data = buf_data.toString()
    console.log(org_data)
}


{
    let fs = require('fs')
    fs.renameSync('readwrite.txt', 'readWrite.txt')    // fs module for rename file with sync way.
}