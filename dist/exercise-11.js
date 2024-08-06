"use strict";
function binarySearch(arr, objetivo) {
    let inicio = 0, fin = arr.length - 1;
    while (inicio <= fin) {
        const middle = Math.floor((inicio + fin) / 2);
        if (arr[middle] === objetivo) {
            return middle;
        }
        else if (arr[middle] < objetivo) {
            inicio = middle + 1;
        }
        else {
            fin = middle - 1;
        }
    }
    return -1;
}
const arr = [3, 5, 7, 8, 24, 34, 45, 67, 67, 74, 87, 89, 91, 100];
const binarySear = binarySearch(arr, 91);
if (binarySear !== -1) {
    console.log(`Elemento encontrado en el indice ${binarySear}`);
}
else {
    console.log("El elemento no se encontro");
}
