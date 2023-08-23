const glass = {
    name : 'glass',
    color : "red",
    price : 20,
    iscleaned : true
}

for(const key in glass){
    const value = glass[key];
    console.log(key, value);
}

// for (const key in glass) {
//     if (glass.hasOwnProperty.call(glass, key)) {
//         const element = glass[key];
//         console.log(element);
//     }
// }