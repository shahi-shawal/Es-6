const a =[1,2,3,4]
const b = [5,6,7,8,9]
const mathMax = (a,b) => {
  const ab = [...a , ...b]
  console.log(ab);
  const abMax = Math.max(...ab)
//   console.log(abMax);
 return abMax;
}

console.log(mathMax(a,b));

