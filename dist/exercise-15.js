"use strict";
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
const arr1 = [30, 20, 56, 2, 94, 23, 5, 15, 2, 67, 32, 1];
console.log(`Algoritmo de ordenamiento de burbuja del arra ${arr1.toString()} es: ${bubbleSort(arr1)}`);
