'use strict';
console.log('arrayHOF.js');

const numArray = [5,15,-2,0,-5,7];
for (let sk of numArray) {
    // suksis per visa masyva
    // kiekvieno ciklo metu reiksme lygi sk
    // console.log('sk ===', sk);
}

// forEch(fn)

numArray.forEach(function(sk,i,arr) {
    console.log(`indeksas ${i}, reiksme ${sk ** 2}--- `,arr);
    // console.log(`Priekyje index esanti reiksme `arr[i+1]);
});
const positives = [];
numArray.forEach((sk) => {
    if (sk > 0) {
       positives.push(sk); 
    }
});
console.log(positives);


// paversti masyvo neigiamus skaicius teigiamai
console.log(-15 * -1);
let total = 0;

numArray.forEach((sk,i,arr) => {
    if (sk < 0) {
       
        // console.log('sk * -1 ===', sk * -1);
        arr[i] = sk * -1;
    } else {
        // console.log('sk', sk);
    }
    total = total + numArray;
    
   
});
let avg = total / numArray.length;
 console.log('avg ===', avg);


//  paskaiciuti numArray masyvo vidurki





function capitalizeContent(str) {
    const capitalize = str.charAt(0).toUpperCase;
}
capitalizeContent('lape');