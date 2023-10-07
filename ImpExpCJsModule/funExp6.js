// Export functions or module to another file with Common JS module method
// For using Commom JS module :-
// step-1 : use npm init -y command and write type as a commonjs or none in object property
// step-2 : make a file extension is cjs ex- funExp6.mjs

{
    const name = 'jaiprakash';

    const add = (a, b) => {
        return a + b;
    }

    const sub = (a, b) => {
        return a - b;
    }

    // module.exports.name = name;
    // module.exports.add = add;
    // module.exports.sub = sub;

    module.exports = { name, add, sub }

    // exports.name = name;
    // exports.add = add;
    // exports.sub = sub;
}

