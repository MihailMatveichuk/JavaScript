'use strict';
// function trees() {
//     const lines = 7;
//     let result = '';
//     let star = '*';
//     for (let i = 0; i <= lines; i++){
//             result = result + star.repeat(2 * i + 1) + '\n';  
//             let space = ' '.repeat(lines - i - 1);
//             console.log(space + result);
//         }
//     } 
//     trees();
//    // for (let j = 1; j <= i; j++)
const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++){
    for (let j = 0; j < lines - i; j++){
    result = result + " ";
    } for (let k = 0; k <2 * i + 1; k++){
    result = result + '*';
    }
result = result + '\n';
}
console.log(result);