'use strict';

if (4) {
    console.log('Ok');
} else {
    console.log('Error');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!'): console.log('Error');

const num = 50;
switch (num) {
    case 49:
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Ok!!');
        break;
    default:
        console.log('Also error');
        break;
}

const humburger = '5',
    fries = '2';
if (humburger && fries) {
    console.log("I am full");
}


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!');
}


let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}


do {
    console.log(num);
    num++;
}
while (num < 55);


for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


let result = '';
const lenght = 7;
for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);


first: for (let i = 0; i < 5; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) { continue first; }
            console.log(`Third level: ${k}`);
        }
    }
}


function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

firstTask();

function secondTask() {
    for (let i = 20; i >= 10; i--) {
        console.log(i);
        if (i === 14) {
            break;
        }
    }
}

secondTask();

function thirdTask() {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}

thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i < 16) {
        i++;
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }
}

fourthTask();

function fifthTask() {
    let arr = [];
    for (let i = 5; i <= 10; i++) {
        arr[i - 5] = i;
    }
    console.log(arr);
    return arr;
}

fifthTask();