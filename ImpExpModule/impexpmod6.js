// Import functions with Common JS method

{
    // const a = require('./funExp6')

    // console.log(a.add(4, 5))
    // console.log(a.sub(8, 5))

    const { add, sub } = require('./funExp6')

    console.log(add(4, 5))
    console.log(sub(8, 5))
}

