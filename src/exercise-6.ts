// 6. Calcular el promedio de un arreglo de números.

const numbers = [10, 3, 5, 2, 8, 7];

const numberAverage = (numbers: number[]) => {
  const totalAmount = numbers.reduce(
    (acumulador, valoractual) => acumulador + valoractual,
    0
  );
  return totalAmount / numbers.length;
};

console.log(
  `El promedio total de estos numeros ${numbers.join()} es ${numberAverage(
    numbers
  ).toFixed(2)}`
);
