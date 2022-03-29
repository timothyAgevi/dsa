//felix's solution
function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString()

    let counter1 = {};
    let counter2 = {};

    for (let val of num1) {
        counter1[val] = (counter1[val] || 0) + 1;
    }
    for (let val of num2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }

    for( let key in counter1){
        if(!(key in counter2)) return false; 

        if(counter2[key] !== counter1[key]) return false;
    }
    
    return true;
}