const glass = {
    name : 'glass',
    color : "red",
    price : 20,
    iscleaned : true
}

const keys = Object.keys(glass);
const keystr = String(keys)
console.log(keystr);

const pair = Object.entries(glass);
console.log(pair);
delete glass.iscleaned;
console.log(glass);

