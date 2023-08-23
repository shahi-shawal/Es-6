const getAge = (person) => person.age;
const student = {name : "shawal", age : 23};
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2];
const array = getThird([1,2,3,4,5]);
console.log(array);

// NO PERAMETER 
const getPi = () => Math.PI;
console.log(getPi());