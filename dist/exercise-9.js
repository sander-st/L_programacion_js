"use strict";
function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}
let factNum = 5;
console.log(`El numero factorial de ${factNum} es: ${factorial(factNum)}`);
