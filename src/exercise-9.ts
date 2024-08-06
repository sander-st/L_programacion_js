// 9. Calcular el factorial de un número.

/* function factorial(num: number): number {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

let fact = 5;

console.log(factorial(fact)); */

/* function factorial(num: number) {
  let fact = num;

  for (let i = num - 1; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}

let factNum = 5;

console.log(`El numero factorial de ${factNum} es: ${factorial(factNum)}`); */

function factorial(num: number) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

let factNum = 5;

console.log(`El numero factorial de ${factNum} es: ${factorial(factNum)}`);
