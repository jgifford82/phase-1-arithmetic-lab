
// Write your code here

let num1 = 2
let num2 = 31

const multiply = num1 * num2;

// tried:

// function multiply() {
//     let num1 = 2
//     let num2 = 31
//     return (num1 * num2)
// };



// let num1 = 2
// let num2 = 31

// function multiply() {
//     return (num1 * num2)
// };



// let num1 = 2
// let num2 = 31

// function multiply(num1 * num2) {
//     return (num1 * num2)
// };


const random = Math.ceil(Math.random() * 10);
// Math.random generated a number between 0 and 0.999. 
// It's being multiplied by 10 to generate a number between 0 and 9.999
// That number is then passed into Math.ceil to round up so that it's greater than 0.


// tried:
// const random = math.random() + 1;

// const random = (math.random() + 1);
//      Error: Math not defined. Math needed to be capitalized.

// const random = (Math.random() + 1);
        // Error: expected false to be true. It's generating a number with decimal. 
        // Need to generate whole number greater than 0.


let num3 = 19
let num4 = 5

const mod = num3 % num4;


const max = Math.max(2, 20, 4, 10);