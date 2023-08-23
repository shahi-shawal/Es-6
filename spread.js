const max = Math.max(10,4,5,6,23,99)
console.log(max);

const numbers = [1,2,3,4,5,6,7,8];
const arraymax = Math.max(...numbers);
// ... is separed oparetor 
console.log(arraymax);

const friends = [2,3,4,5]
const bondhu = friends;
const dustho = [...friends];
friends.push(12)
console.log(bondhu);
console.log(dustho);

// copy and add extra element 
const friendsAdd = [...friends,99];
console.log(friendsAdd);
