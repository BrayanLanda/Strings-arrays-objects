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
// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.slice(0,3));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(5));
// console.log(arr.slice());//shallow copy arrays
// console.log([...arr]);//shallow copy arrays

// //splice method - mutates the original array - different the slice
// arr.splice(-1);
// console.log(arr);
// arr.splice(0, 2);
// console.log(arr);

// //reverse - mutates the original array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// //Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);//Another way 

// //join 
// console.log(letters.join(' - '));
/*const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

//getting last array element 
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Brayan'.at(0));
console.log('brayan'.at(-1));*/

//Working with arrays
// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Computer Systems: A Programmer\'s Perspective',
//     author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65
//       }
//     }
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6
//       }
//     },
//     highlighted: true
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090
//       }
//     }
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0
//       }
//     }
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808
//       }
//     },
//     highlighted: true
//   }
// ];

//console.log(books);

//Destructure the books array into two varibales called firstBook and secondBook
// const [firstBook, secondBook] = books;
// console.log(firstBook);
// console.log('======Second Book========');
// console.log(secondBook);
// const [, , thirdBook] = books;
// console.log('=======Third Book =======');
// console.log(thirdBook);
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount, ratings);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars; 
// console.log(threeStarRatings);

//Destructure objects
// const {title, author, ISBN} = books[4];
// console.log(title, author, ISBN);

// const {keywords: tags} = books[0];
// console.log(keywords.tags);

//Map
// const currencies = new Map([
//   ['USD', 'United States Dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pund sterling']
// ]);
// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set([
//   'USD', 'GBP', 'USD', 'EUR', 'EUR'
// ]);

// currenciesUnique.forEach(function(value, _, map){
//   console.log(`${value}: ${value}`);
// });

const brayan = {
  firstName: 'Brayan',
  lastName: 'Acosta',
  birthYears: 1995,
  proffesion: 'student',
  friends: ['carolina', 'andrea', 'stiven'],
  hasDriversLicense: true,

  calcAge: function(){
    return 2024 - this.birthYears;
  }
}

console.log(brayan.calcAge());