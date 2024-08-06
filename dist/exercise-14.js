"use strict";
function MCD(a, b) {
    while (b !== 0) {
        const resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}
console.log(`El MCD de 24,36 es ${MCD(24, 36)}`);
