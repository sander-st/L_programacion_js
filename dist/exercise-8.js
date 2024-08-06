"use strict";
function esPalindromo(word) {
    let palabraLimpia = word.toLocaleLowerCase().replace(/[^a-z]/g, "");
    let palabraInvertida = palabraLimpia.split("").reverse().join("");
    return palabraLimpia === palabraInvertida;
}
let palabra1 = "amor";
console.log(esPalindromo(palabra1));
