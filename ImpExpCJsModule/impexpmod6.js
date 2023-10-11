// Import functions or module with Common JS module method

{
    // const a = require('./funExp6')

    // console.log(a.name)
    // console.log(a.add(4, 5))
    // console.log(a.sub(8, 5))

    const { name, add, sub } = require('./funExp6')

    console.log(name)
    console.log(add(4, 5))
    console.log(sub(9, 5))

    const c = require('../ModWrapperFun/wrapfun8')
    console.log(c.candidate)

}

