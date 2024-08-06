"use strict";
function sumDigitos(num) {
    const separateDigits = num
        .toString()
        .split("")
        .map((p) => parseInt(p));
    const totalAmount = separateDigits.reduce((previusValue, currentValue) => previusValue + currentValue, 0);
    return totalAmount;
}
let numdigit = 45324;
console.log(`La suma total del digito ${numdigit} es: ${sumDigitos(numdigit)}`);
