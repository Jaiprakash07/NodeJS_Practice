//REPL = It stands for Read Evaluate Print Loop, it is concept or a way to test simple javascript code in nodejs.

//1. JS Expression 
//2. Use Variables
//3. Multiline Code
//4. Use (_) to get the last result
//5. We can use Editor mode

// write all 5 point in terminal section or node env.
//1. JS Expression 
console.log(4 + 6)
console.log(6 - 2) 
console.log(4 * 6)  
 ,-
console.log(6 / 2)
console.log(7 % 2)


//2. Use Variables
let a = 'jaiprakash';
var b = 'nagar';
console.log(a + ' ' + b);


//3. Multiline Code
{
    let a = 0;
    do {
        a++;
        console.log(a)
    }
    while (a < 5)
}

{
    let arr = [87, 43, 35]
    function array(arrs) {
        arrs.map(arr => {
            console.log(arr)
        })
    }
    array(arr)
}


//4. Use (_) to get the last result
{
    let a = 6;
    let b, c;
    c = a + 5;
    console.log(c)
    // console.log(_ + 8)        // this work only terminal or node environment when type node command 
}


//5. We can use Editor mode
// make a function is in ndeeditor mode in terminal section

// let name = () => {
//     console.log('hyy john')
// }
// name()

// ctrl + c = cancel,
// ctrl + d = finish