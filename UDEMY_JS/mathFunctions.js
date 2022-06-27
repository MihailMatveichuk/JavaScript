// Место для первой задачи
function calculateVolumeAndArea(value){
    if(Number.isInteger(value) && value > 0){
        return `Объем куба: ${Math.pow(value, 3)}, площадь всей поверхности: ${6 * Math.pow(value, 2)}`;
    } else {
        return 'При вычислении произошла ошибка';
    }
}

function getCoupeNumber(value){
    if(typeof (value) !== 'number' || value < 0 || !Number.isInteger(value)){
        console.log(`Ошибка. Проверьте правильность введенного номера места`);
    } else if ( value === 0 || value >= 36){
        console.log(`Таких мест в вагоне не существует`);
    } else {
       if (value % 4 > 0){
        console.log(Math.floor(value / 4) + 1);
       } else if (value < 4){
        console.log(value);  
       } else {
        console.log(Math.floor(value / 4));
       }
    }
}
getCoupeNumber('10');
