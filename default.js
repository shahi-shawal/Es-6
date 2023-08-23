// default = if value is not provide, take this as a default 
function add(num1=0, num2=0) {
    const sum = num1 + num2;
    console.log(num1, num2, sum);
    return sum;
}

const num = add();

function name (first, last=''){
    const name = first + " " + last;
}

function friends(numbs = []) {
    
}

function person(human = {}) {
    
}