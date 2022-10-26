'use strict';
console.log('string.js');


let str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';

// String ilgis
console.log('str1.length ===', str1.length);

// iskirpti dali string.prototype.slice(start, end)
const firstWord = str1.slice(0,6);
console.log('firstWord ===', firstWord);

// iskirpti viska iskyrus dirma zodi
const allButFirstWord = str1.slice(6,35);
console.log('allButFirstWord ===', allButFirstWord);


console.log('allButFirstWord ===', firstWord.toLocaleUpperCase() + allButFirstWord);


// substr nebenaudojamas
const overWord = str1.slice(17,17 + 4);
console.log('overWord ===', overWord);

// .replace
// pakeisti jumped i peršoko
const replaced = str1.replace('jumped', 'peršoko');
console.log('replaced ===', replaced);

// replace ka argumente gali naudoti regular experssion
const replaced2 = str1.replace(/jumped/g, 'peršoko');
console.log('replaced2 ===', replaced2);

const replaced3 = str1.replace(/jumped/i, 'peršoko');
console.log('replaced3 ===', replaced3);

str1 = 'Brown fox 5 jumped over 6 the lazy 7 dog. And in 8 jumped again.';
console.log('str1.replace(/\d+/g, *skaicius*; ===', str1.replace(/\d+/g, '*skaičius*'));

// regex
console.log('str1.match(/[a-zA-Z]+/g).join( ) ===', str1.match(/[a-zA-Z]+/g).join(' '));

// concat(string,tring,string.....)
let str2 = 'brown'.concat(' ', 'fox', ' ', 'peršoko per šunį');
console.log('str2 ===', str2);

// .trim apkarpo tarpus aplink string




str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';
const zodziuMasyvas = str1.split (' ');
console.log('zodziuMasyvas ===', zodziuMasyvas);

const raidziuMasyvas = str1.split ('');
console.log('raidziuMasyvas ===', raidziuMasyvas);

const sakiniuMasyvas = str1.split ('.');
console.log('sakiniuMasyvas ===', sakiniuMasyvas);

console.log(new Date().toISOString().split('T')[0]);

// .join(skirtukas) sujungia masyva i string per nurodyta skirtuka
// sujungti zodziu masyva atgal
const zodziaiFromArray = zodziuMasyvas.join(' ');
console.log('sujungti su join',zodziaiFromArray);

str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';
// .indexOf('ko ieskom')
let overIndex = str1.indexOf('over');
console.log('overIndex ===', overIndex);
console.log('str1.slice(0,overIndex) ===', str1.slice(0,overIndex));

// .includes(ko ieskom) grazina true arba false
console.log('str1.includes(lazy) ===', str1.includes('lazy'));



// iskrirpti sakini nuo fox iki And panadojant idexOf

let foxIndex = str1.indexOf('fox');
let AndIndex = str1.indexOf('And');
let forAndSlice = str1.slice(foxIndex,AndIndex);

console.log(forAndSlice);


// gauta reiksme paversti i masyva

str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';
const uzdMasyvas = forAndSlice.split(' ');
console.log('uzdMasyvas ===', uzdMasyvas);


// sujungti atgal i sakini su ' ++'

const uzdFromArray = uzdMasyvas.join(' ');
console.log('sujungti su join',uzdFromArray);

// extra sujungti atgal padarius paskutinę raidę didziaja

console.log('str1.length ===', str1.length);


