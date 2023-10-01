// Challenge1 (CRUD) operation using async way.

//1. Create a folder with JaiAsyn named.
//2. Create a file in it named ContentAsyn.txt and data into it.
//3. Add more data into the file at the end of the existing data.
//4. Read the data without getting buffer data at first.
//Using file encoding
//5. Rename the file name to MyContentAsyn.txt.
//6. Now delete both the file and folder.


{
    const fs = require('fs')

    // fs.mkdir('JaiAsyn', (err) => {                                                                           //1
    //     console.log('Folder created')
    // })

    fs.writeFile('JaiAsyn/ContentAsyn.txt', 'Challenge2 with Async way,', (err) => {                            //1,2
        console.log('File created in folder')
    })

    fs.appendFile('JaiAsyn/ContentAsyn.txt', 'Add more data inside the file by append mthd', (err) => {         //3
        console.log('Append data')
    })

    fs.readFile('JaiAsyn/ContentAsyn.txt', 'UTF-8', (err, data) => {                                            //4
        console.log(data)
        console.log('Read data')
    })

    fs.rename('JaiAsyn/ContentAsyn.txt', 'JaiAsyn/MyContentAsyn.txt', (err) => {                                //5
        console.log('Renamed File')
    })

    // fs.unlink('JaiAsyn/MyContentAsyn.txt', (err) => {                                                        //6
    //     console.log('Deleted File')
    // })

    // fs.rmdir('JaiAsyn', (err) => {                                                                           //6
    //     console.log('Deleted Folder')
    // })
}