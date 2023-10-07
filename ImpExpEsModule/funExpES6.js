// Export functions or module to another file with ES6 module method 
// For using ES6 module :-
// step-1 : use npm init -y command and write type as a module in object property
// step-2 : make a file extension is mjs ex- funExpES6.mjs

const name = 'jaiprakash';

const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

// export default name;
export { name, add, sub }