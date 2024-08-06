// 10. Encontrar la suma de los dígitos de un número.

function sumDigitos(num: number) {
  const separateDigits = num
    .toString()
    .split("")
    .map((p) => parseInt(p));
  const totalAmount = separateDigits.reduce(
    (previusValue, currentValue) => previusValue + currentValue,
    0
  );
  return totalAmount;
}

let numdigit = 45324;

console.log(`La suma total del digito ${numdigit} es: ${sumDigitos(numdigit)}`);
