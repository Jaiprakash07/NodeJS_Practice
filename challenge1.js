// Challenge1 (CRUD) operation.

//1. Create a folder with Jai named.
//2. Create a file in it named Content.txt and data into it.
//3. Add more data into the file at the end of the existing data.
//4. Read the data without getting buffer data at first.  
//Using file encoding
//5. Rename the file name to MyContent.txt.
//6. Now delete both the file and folder.


{
    let fs = require('fs')

    // fs.mkdirSync('Jai')                                                                                                    //1.

    fs.writeFileSync('Jai/Content.txt', 'I have create Jai named folder and inside the folder create a file Content named.')  //2.  

    fs.appendFileSync('Jai/Content.txt', ' Add more data into the file')                                                      //3.

    // let new_data = fs.readFileSync('Jai/Content.txt').toString()                                                         
    let new_data = fs.readFileSync('Jai/Content.txt', 'utf8')                                                                 //4.
    console.log(new_data)

    fs.renameSync('Jai/Content.txt', 'Jai/MyContent.txt')                                                                     //5.

    // fs.unlinkSync('Jai/MyContent.txt')                                                                                     //6.

    // fs.rmdirSync('Jai')                                                                                                    //6.
}

