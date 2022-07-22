// const restorantData = {
//     menu: [{
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// // function isOpen(prop) {
// //     let answer = '';
// //     prop ? answer = 'Открыто' : answer = 'Закрыто';

// //     return answer;
// // }

// // return isOpen(restorantData.openNow));

// // function isAverageLunchPriceTrue(fDish, sDish, average) {
// //     return +fDish.price.slice(0, -1));
// //     if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < +average.slice(0, -1)) {
// //         return 'Цена ниже средней';
// //     } else {
// //         return 'Цена выше средней';
// //     }
// // }

// // return isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[{ name: 'Mike', age: 32 }];
//     return copy);
// }

// transferWaitors(restorantData);
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     console.log(result);
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }
// pow(2, 1);
// pow(2, 2);
// pow(2, 3);
// pow(2, 4);

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        seni: {
            students: [{
                name: 'test',
                progress: 100
            }]
        }
    }
};
// Without recursion
function getTottalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / students;
}
console.log(getTottalProgressByIteration(students));

// With recursion

function getTottalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArray = getTottalProgressByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }
        return total;
    }
}
const result = getTottalProgressByRecursion(students);
console.log(result[0] / result[1]);