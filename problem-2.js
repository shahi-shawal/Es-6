function friends(name) {
    let evenFriends= [];
    for (let i = 0; i<name.length; i++) {      const element = name[i];
      if (element.length % 2 == 0) {
        evenFriends.push(element);
      }
    }
    return evenFriends;
}

const even = ["shawal", "Rakib","Afria", "Mukta", "Sanchita","Adri","Ovi","Chaity"]
const nameFr = friends(even)
const nameStr = String(nameFr);
console.log(nameStr);
console.log(nameFr);