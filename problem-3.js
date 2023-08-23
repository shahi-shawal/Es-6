const num = [2,3,4,5];
const squrfun = (num) => {
  let sqrArr = [];
  for (const item of num) {
     const itemSqr = item *  item; //Math.pow(item, 2)
     sqrArr.push(itemSqr)
   
  }
  console.log(sqrArr);
  let total =0;
  for (const item2 of sqrArr) {
    total= total + item2;
  }
  console.log(total);

  const sqrAveg = total / sqrArr.length;
  console.log(sqrAveg);
}
squrfun(num)