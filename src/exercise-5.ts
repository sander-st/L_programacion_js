// 5. Convertir grados Celsius a Fahrenheit.

// Fórmula
// (32 °C × 9/5) + 32 = 89.6 °F

const celsiusAfahrenheit = (num: number) => (num * 9) / 5 + 32;

let celsius = 32; //°C

console.log(
  `la temperatura de ${celsius}°C equivale a ${celsiusAfahrenheit(celsius)}°F`
);
