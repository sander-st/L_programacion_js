"use strict";
let userName = "";
const enterUserName = () => prompt("Ingresa tu nombre.");
do {
    userName = enterUserName();
    if (userName) {
        console.log(`Tu nombre es: ${userName}`);
    }
    else
        console.log("Ingrese un nombre valido, porfavor.");
} while (!(userName === null || userName === void 0 ? void 0 : userName.trim()));
