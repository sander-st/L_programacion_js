// 2. Pedir al usuario su nombre y saludarlo por consola.

// const userName = prompt("Ingresa tu nombre");

let userName: string | null = "";
const enterUserName = () => prompt("Ingresa tu nombre.");

do {
  userName = enterUserName();
  if (userName) {
    console.log(`Tu nombre es: ${userName}`);
  } else console.log("Ingrese un nombre valido, porfavor.");
} while (!userName?.trim());
