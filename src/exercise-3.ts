// 3. Calcular el área de un rectángulo dado su base y altura.

const area = 10,
  altura = 5;

const calcularArea = (area: number, altura: number) => {
  return area * altura;
};

const areaRectangulo = calcularArea(area, altura);

console.log(`Area total del rectangulo: ${areaRectangulo}`);
