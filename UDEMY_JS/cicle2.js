'use strict';

function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    console.log(result);
    return result;
}
firstTask();

function secondTask() {
    let arr = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'number') {
            arr[i] = arr[i] * 2;
        } else if (typeof(arr[i]) === 'string') {
            arr[i] = `${arr[i]} - done`;
            123
        }
    }
    console.log(arr);
    return arr;
}

secondTask();

function thirdTask() {
    let arr = [5, 10, 'Shopping', 20, 'Homework'];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[(arr.length - 1) - i];
    }
    console.log(result);
    return result;
}
thirdTask();