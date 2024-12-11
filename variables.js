// Variables 
let string = "Hello";
const Title = "world";
var str = "Var is'nt used anymore"

console.log(string);

let globalVar = "This is a global variable";

function privatefun() {
    let localVar = "This is local variable";

    console.log(globalVar);
    console.log(string);
    console.log(Title);
    console.log(localVar);
    console.log(str);
}

privatefun();