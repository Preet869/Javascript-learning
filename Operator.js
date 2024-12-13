let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

console.log("");
let x = 5;
let y = "5";

console.log(x == y);
console.log(x === y);
console.log(x !== y);
console.log(x > 3);
console.log(x <= 5);

console.log("");
let age = 25;
console.log(age > 18 && age < 30);
console.log(age > 30 || age < 20);
console.log(!(age > 18));

console.log("");

let num1 = 25;
let num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Remainder:", num1 + num2);

console.log("");

let number = 50;

if(number >= 1 && number <= 100){
    console.log("The number is within the range.");
} else {
    console.log("The number is out of range.");
}

let password = "secure123";
if(password.length >= 8 && password.includes("123")) {
    console.log("Password is strong!");
} else {
    console.log("Password is weak!");
}

console.log("");

let number1 = 7;
if (number % 2 === 0) {
    console.log(`${number1} is even`);
} else {
    console.log(`${number1} is odd`);
}

let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if(score >= 80) {
    console.log("Grade: B");
} else if(score >= 70) {
    console.log("Grade: C");
} 
// test