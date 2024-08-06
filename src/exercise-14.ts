// Encontrar el MCD de dos numeros

/**
 * Algoritmo de Euclides
 * El algoritmo de Euclides se basa en el siguiente principio:
 * MCD(a,b)=MCD(b,a%b)
 *
 * Pasos del Algoritmo
 * Dividir a por b y calcular el resto r.
 * Reemplazar 𝑎 con 𝑏 y 𝑏 con 𝑟.
 * Repetir los pasos anteriores hasta que 𝑏 sea 0.
 * El MCD es el valor de 𝑎 cuando 𝑏 es 0.
 */

function MCD(a: number, b: number) {
  while (b !== 0) {
    const resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

console.log(`El MCD de 24,36 es ${MCD(24, 36)}`);
