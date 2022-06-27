"use strict";


function sayHello (name){
    console.log(`Привет,${name}!`);
}
sayHello('Антон');

function returnNeighboringNumbers(num){
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(5);


function getMathResult(a, b) {
    let x = 0;
    let str = '';

    if (typeof b === 'number') {
        for (let i = 1; i <= b; i++) {
            if (i === b) {
                str = str + `${a * i}`;
                // Тут без черточек в конце
            } else {
                str = str + `${a * i}---`;
            }
        
    } console.log(str);
}
}
getMathResult(5, '6');