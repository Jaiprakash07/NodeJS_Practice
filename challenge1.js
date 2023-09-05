// Challenge1 (CRUD) operation.

//1. Create a folder with Jai named.
//2. Create a file in it named bio.txt and data into it.
//3. Add more data into the file at the end of the existing data.
//4. Read the data without getting buffer data at first.  
//Using file encoding
//5. Rename the file name to mybio.txt.
//6. Now delete both the file and folder.


//1. Create a folder with Jai named.
{
let fs = require('fs')

fs.mkdirSync('Jai')
fs.writeFileSync('bio.txt','I have create Jai named folder and inside the folder create a file bio named.')
}