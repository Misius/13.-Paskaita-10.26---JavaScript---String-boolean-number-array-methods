'use strict';
console.log('bool.js');



let isLoggedIn = true;
console.log('isLoggedIn ===', isLoggedIn);
// paversti i priesinga

isLoggedIn = !isLoggedIn;
console.log('!isLoggedIn ===', !isLoggedIn);
console.log('!isLoggedIn.toString() ===', !isLoggedIn.toString());

let user = false;
user = {
    name: 'Mike',
}

// ar jau turim vartotoja
if (user !== null) {
    // turim vartotoja
}
if (user) {
    // bolean user
    // turim vartotoja
}


let arr1 = [1,2].toString();
let arr2 = [1,2].toString();
console.log('arr1 === arr2 ===',arr1 === arr2);

let arr3 = [1,2,['a','b']];
let arr4 = [1,2,['a','b']];
console.log('arr3 ===', arr3.toString());
console.log('JSON.stringify(arr3,null,2) ===', JSON.stringify(arr3,null,2));
