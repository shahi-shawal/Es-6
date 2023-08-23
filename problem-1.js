const arrowfun = (a,b,c) => a * b *c;

const pera = arrowfun(2,4,5)
console.log(pera);

const arrowfun2 = (x, y=1) => {
    return x + y;
}
const sum = arrowfun2(4);
console.log(sum);

const sen1 = "I am a web developer";
const sen2= "I love to code";
const sen3= "I love to eat biriyani";

const sentence = `I am a web developer. I love to code .I love to eat biriyani`
// const sentence = ` ${sen1}. ${sen2}.${sen3}`;
console.log(sentence);