"use strict";
function esPrimo(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return n > 1;
}
console.log(`El numero 5 ${esPrimo(5) ? "es primo" : "no es primo"}`);
console.log(`El numero 6 ${esPrimo(6) ? "es primo" : "no es primo"}`);
console.log(`El numero 23 ${esPrimo(23) ? "es primo" : "no es primo"}`);
