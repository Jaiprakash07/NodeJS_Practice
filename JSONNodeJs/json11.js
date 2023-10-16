// JSON 

//1. convert norm object into JSON
//2. create a file and add JSON data
//3. read this file
//4. again convert JSON data in real object
//5. show data in console.log

//
{
    const fs = require('fs')
    const bio = {
        name: 'jay',
        age: '24',
        job: 'developer'
    }
    console.log(bio)

    const jso = JSON.stringify(bio)                                      // 1
    // console.log(jso)

    // const obj = JSON.parse(jso)
    // console.log(obj)

    fs.writeFile('realjson.json', jso, (err, data) => {                  // 2
        if (err) {
            console.log('failed')
        } else {
            console.log('success')
        }
    })

    fs.readFile('realjson.json', 'utf-8', (err, data) => {               // 3
        console.log(data)
        console.log(JSON.parse(data))                                    // 4, 5
    })

}