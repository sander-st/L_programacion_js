// 4. Determinar si un número es par o impar.

const imparOrPar = (num: number) => {
  if (num % 2 === 0) console.log(`El numero ${num} es par.`);
  else console.log(`El numero ${num} es impar.`);
};

// par
imparOrPar(12);
//impar
imparOrPar(5);
