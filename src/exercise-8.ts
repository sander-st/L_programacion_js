// 8. Determinar si una palabra es palíndromo.

/**
 * pasos para convertir una palabra si es palindromo
 * 1. Convertir a minuscula y eliminar cualquier caracter no alfabetico (espacios en blanco)
 * 2. invertir la cadena de texto
 * 3. comparar si la cadena de texto es igual a la invertida
 * 4. Retornar si es true o false
 *
 */

function esPalindromo(word: string) {
  let palabraLimpia = word.toLocaleLowerCase().replace(/[^a-z]/g, "");

  let palabraInvertida = palabraLimpia.split("").reverse().join("");

  return palabraLimpia === palabraInvertida;
}

let palabra1 = "amor";

console.log(esPalindromo(palabra1));
