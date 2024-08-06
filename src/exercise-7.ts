// 7. Encontrar el mayor y menor número en un arreglo.

const nums = [10, 4, 6, 37, 54];

const minorAndMajor = (nums: number[]) => {
  return [Math.max(...nums), Math.min(...nums)];
};

const menorYmayor = minorAndMajor(nums);

console.log(
  `El numero mayor del array nums es: ${menorYmayor[0]}, y el menor es ${menorYmayor[1]}`
);
