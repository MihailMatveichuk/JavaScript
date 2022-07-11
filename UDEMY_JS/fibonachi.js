function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    } else {
        let prev = 0;
        let next = 1;
        let result = "";
        for(let i = 0; i < num; i++){
            if(i + 1 === num){
                result  += `${prev}`;
            } else {
                result += `${prev} `;
            }
       
            let item = prev + next;
            prev = next;
            next = item;
        } 
        return result;
    }
}
console.log(fib(4));