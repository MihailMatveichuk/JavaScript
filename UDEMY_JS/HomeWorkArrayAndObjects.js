// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan){
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;
//         languages.forEach(lang => {
//             str += `${lang.toUpperCase()} `;
//         });
//         return str;
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp; 
// }

// function showProgrammingLangs(plan) {
// let str = '';
// const {programmingLangs} = plan.skills;
// for(let key in programmingLangs){
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// }
// console.log(str);
// }



// showExperience(personalPlanPeter);
// showProgrammingLangs(personalPlanPeter);
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//         if(arr.length !== 0){
//             str = 'Семья состоит из: ';
//             for(let key of arr){
//             str += `${key.toLowerCase()} `;
//             }
//         } else {
//             str  = "Семья пуста";
//         }       
//    return str;
// }

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for(let key of arr){
//         let str = key;
//         console.log(str.toLowerCase());
//     }
    
// }
// standardizeStrings(favoriteCities);
// showFamily(family);

// const someString = 'This is some strange string';

// function reverse(str) {
// if(typeof(str) !== 'string'){
//     return "Ошибка";
// } else{
//    let revStr = str.split("").reverse("").join("");
//    return revStr;
// }
// }
// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = 'Доступные валюты:\n';
//     if(arr.length !== 0){
//     for(let key of arr){
//         if (key !== missingCurr){
//             str += `${key}\n`;
//         } 
//      } return str;
//     } else {
//         console.log("Нет доступных валют");
//     }
// }
// availableCurr(additionalCurrencies, "");

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     console.log(+fDish.price.slice(0, -1));
//     if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    console.log(copy);
}

transferWaitors(restorantData);