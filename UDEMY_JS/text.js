// 'use strict';

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 150000
// };

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     const {shops} = data;
//     const {moneyPer1m3} = data;
//     const {budget} = data;

//     shops.forEach(el => {
//         square += el.width * el.length;
//     });

//     volume = square * data.height;

//     if(volume * moneyPer1m3 > budget){
//         return "Бюджета недостаточно";
//     } else{
//         return "Бюджета достаточно";
//     }
// }
// isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', "Sam", 'Mikle'];

//1 variant
// function sortStudentsByGroups(arr){
//     arr.sort();
//     let sortArray = [];
//     let rest = [];
//     let newArray =[];
//     let num = 3;
//     let str = "Осташиеся студенты:";
//             for(let i = 0; i < 9; i+=num){
//                sortArray.push(arr.slice(i, i + num));
//             }  
//             for(let k = 9; k < arr.length; k++){
//                rest.push(arr[k]); 
//             }
//             if(rest.length === 0){
//                 newArray = [sortArray, `${str} -`];
//             } else {
//                 newArray = [sortArray, `${str} ${rest.join(', ')}`]; 
//             } 
//             console.log(newArray);
//     }
        
function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}
sortStudentsByGroups(students);