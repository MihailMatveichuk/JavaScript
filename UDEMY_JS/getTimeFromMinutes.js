function getTimeFromMinutes(minutes){
    if(typeof(minutes) !== "number" || minutes < 0 || !Number.isInteger(minutes)){
       console.log(`Ошибка, проверьте данные`);
    } else{
        if(Math.floor(minutes / 60) === 1){
           console.log(`Это 1 час и ${minutes % 60} минут`);
        } else if(Math.floor(minutes / 60) >= 5 && Math.floor(minutes / 60) <= 10 ||  Math.floor(minutes / 60) === 0){
           console.log(`Это ${Math.floor(minutes / 60)} часов и ${minutes % 60} минут`); 
        } else if(Math.floor(minutes / 60) >= 2 && Math.floor(minutes / 60) <= 4){
           console.log(`Это ${Math.floor(minutes / 60)} часа и ${minutes % 60} минут`);
        }
    }
} 
getTimeFromMinutes(-10);
