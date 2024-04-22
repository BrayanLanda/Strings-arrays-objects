'use strict'

//Methods String
const airline = 'TaP Air Portugal';

console.log(airline.toLowerCase());

//Fix capatilazation in name
/*const passanger = 'bRaYAn';
console.log(passanger);
const passangerLower = passanger.toLowerCase();
console.log(passangerLower);
const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
console.log(passangerCorrect);*/
/*const email = 'brayan@gmail.com';
const loginEmail = '  BrAyan@Gmail.Com  \n';
console.log(loginEmail);
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);*/

//replacing
/*const priceGB = '288,97*';
const priceUS = priceGB.replace('*', '$').replace(',','.');
console.log(priceUS);
const priceCOP = priceGB.replace(priceGB, `${priceGB}@myDominio.com`);
console.log(priceCOP);*/
/*
const announcement = 'All passangers come to boarding door 23. Boarding door 23!';
console.log(announcement);
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));*/

//Booleans methods
/*const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('Part of the New Airbus Family');
}*/

/*const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  }else{
    console.log('Welcome aboard')
  }
} 

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');*/

//Split and join
/*const myName = ('  Brayan Acosta   ').trim().toLowerCase().split(' ');
console.log(myName);
const [firtsName, lastName] = myName;
//const lastName = myName[1];
console.log(firtsName);
console.log(lastName);
const newName = ['Mr.', firtsName, lastName.toUpperCase()].join('--');
console.log(newName);

const capitalizeName = function(name){
  const names = name.toLowerCase().split(' ');
  const namesUpper = [];

  for(const n of names){
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('brayan acosta ferrao');
capitalizeName('carolina andRea CarDona');*/

//padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '*').padEnd(30, '+'));

// const markCreditCard = function(number){
//   const str = number + '';
//   const last = str.slice(-4);

//   return last.padStart(str.length, '*');
// }
// console.log(markCreditCard(9019289800));
// console.log(markCreditCard('9019288599'));

//repeat 
// const message = 'Bad weather... All departues Delayed... ';
// console.log(message.repeat(7));
// const planesInLine = function(number){
//   console.log(`There ${number} planes in line ${'🛩️'.repeat(number)}`);
// }
// planesInLine(5);


/*document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function(){
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for(const [i, row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'🆗'.repeat(i + 1)}`);
  }
});*/

//slice method
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr.slice(0,3));
console.log(arr.slice(1, -2));
console.log(arr.slice(5));
console.log(arr.slice());//shallow copy arrays
console.log([...arr]);//shallow copy arrays

//splice method - mutates the original array - different the slice
arr.splice(-1);
console.log(arr);
arr.splice(0, 2);
console.log(arr);

//reverse - mutates the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);//Another way 

//join 
console.log(letters.join(' - '));
/*const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element 
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Brayan'.at(0));
console.log('brayan'.at(-1));*/