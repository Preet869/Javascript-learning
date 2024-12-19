function add(a, b){
    return a + b;
}
console.log(add(3, 5))

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
console.log(multiply(3, 4));
console.log(divide(3, 6));

function compareNumbers(a, b) {
    if (a > b) {
        return(`${a} is greater than ${b}`);
    } else if (a < b) {
        return (`${a} is less than ${b}`);
    } else {
        return (`${a} is equal to ${b}`);
    }
}

console.log(compareNumbers(5, 3));
console.log(compareNumbers(1, 3));
console.log(compareNumbers(2, 2));

function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum
}
console.log(sumArray([1,2,3,4]));