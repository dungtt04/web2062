// // //Number
// // console.log(100);
// // //String
// // console.log('dungttph38116');
// // //multiple value
// // console.log('Hello', 20, true);
// // //Variable 
// // const x = 100;
// // console.log(x);
// // //Error, warring
// // console.error('Alert');
// // console.warn('Warring');
// // // object as table
// // console.table({ name: 'Brad', email: 'brad@gmail.com' });
// // // Group console commands
// // console.group('simple');
// // console.log(x);
// // console.error('Alert');
// // console.warn('Warning');
// // console.groupEnd();

// // // Add CSS to logs
// // const styles = 'padding: 10px; background-color: white; color: green';
// // console.log('%cHello World', styles);
// //Comment 1
// /*
//     Comment 2
//  */
// // Variable 
// let firstName = 'John';
// const lastName = 'Doe';
// let age=30;
// age=31;

// console.log(firstName, lastName);
// console.log('Age: ', age);
// // With let, we can declare a value without assigning a value
// let score;
// score = 1;
// console.log(score);

// if (true) {
//   score = score + 1;
// }

// console.log(score);
// const x = 100;
// // Array
// const arr = [1, 2, 3, 4];
// // arr.push(5);
// // arr.push('Number');
// arr.pop()
// console.log(arr);
// //Object
// const person = {
//     name: 'Brad',
//     age: 20
//   };
// //Data type
// //string
// //number
// // boolean
// //ten bien: has, is,...
// //Null
// // const score1=undefined;
// // // Symbol
// // const id = Symbol('id');

// // // BigInt
// // const n = 9007199254740991n;
// // // Reference Types
// // //Array
// // const numbers = [1, 2, 3, 4];

// // const person3 = {
// //   name: 'Brad',
// // };
// // //Function
// // function sayHello() {
// //     //code logic
// //   console.log('Hello');
// // }

// // const output = sayHello;

// // console.log(output, typeof output);
// const name = 'John';
// const age = 30;

// // Reference is stored in the heap
// const person = {
//   name: 'Brad',
//   age: 40,
// };

// let newName = name;
// newName = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName); // John, Jonathan
// console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }

// //06 type conversion
// let amount = 'hello';

// // Convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// // Convert number to string
// amount = amount.toString();
// amount = String(amount);

// // Convert string to decimal
// amount = parseFloat(amount);

// // Convert number to boolean
// amount = Boolean(amount);

// // Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

// console.log(amount, typeof amount);
//07-operators
// 1. Arithmetic Operators

// let x;

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;

// // Concatenation
// x = 'Hello' + ' ' + 'World';

// // Exponent
// x = 2 ** 3;

// // Increment
// x = 1;
// // x = x + 1;
// x++;

// // Decrement
// // x = x - 1;
// x--;

// // 2. Assignment Operators

// x = 10;

// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5;
// x **= 5;

// // 3. Comparison Operators

// // Equal to (Just the value, not the type)
// x = 2 == '2';

// // Equal to (Type and value)
// x = 2 === '2';

// // Not equal to (Just the value, not the type)
// x = 2 != '2';

// // Not equal to (Type and value)
// x = 2 !== 2;

// // Greater than and less than
// x = 10 > 5;
// x = 10 < 5;
// x = 10 <= 5;
// x = 10 >= 5;

// console.log(x);
//08-type coertion
// let x;

// // Coerced to a string
// x = 5 + '5';

// x = 5 + Number('5');

// // Coerced to a number
// x = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// x = 5 + null;

// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);
//string
// let x;

// // Coerced to a string
// x = 5 + '5';

// x = 5 + Number('5');

// // Coerced to a number
// x = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// x = 5 + null;

// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);
//capitalize challege
//11 - number
// let x;

// const num = new Number(5);

// // toString() - returns a string representation of the number
// x = num.toString();
// // To get the length
// x = num.toString().length;

// // toFixed() - returns a string representation of the number with a specified number of decimals
// x = num.toFixed(2);

// // toPrecision() - returns a number with the specified length
// x = num.toPrecision(3);

// // toExponential() -  convert a number to exponential notation and return its value as a string
// x = num.toExponential(2);

// // toLocaleString() - returns a string representation of the number, using the current locale
// x = num.toLocaleString('en-US');

// // valueOf - Get value
// x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

// console.log(x);
//toán tử
// let x;

// Square root
// x = Math.sqrt(9);

// Absolute value
// x = Math.abs(-5);

// Round
// x = Math.round(4.2);

// Round up
// x = Math.ceil(4.2);

// Round down
// x = Math.floor(4.9);

// Exponent
// x = Math.pow(2, 3);

// Minimum number
// x = Math.min(4, 5, 3);

// Maximum number
// x = Math.max(4, 5, 3);

// Get a random number/decimal between 0 and 1
// x = Math.random();

// Get a random number between 1 and 100
// x = Math.floor(Math.random() * 100 + 1);

// console.log(x);
//data and time
// let d;

// // Get today's date and time
// d = new Date();

// // Set to a string
// d = d.toString();

// // Get a specific date
// // Important: the month is 0-based, so 0 is January and 11 is December
// d = new Date(2021, 0, 10, 12, 30, 0);

// // Pass in a string
// d = new Date('2021-07-10T12:30:00');
// d = new Date('07/10/2021 12:30:00');
// d = new Date('2022-07-10');
// d = new Date('07-10-2022');

// // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

// // Get current timestamp
// d = Date.now();

// // Get the timestamp of a specific date
// d = new Date();
// d = d.getTime();
// d = d.valueOf();

// // Create a date from a timestamp
// d = new Date(1666962049745);

// // Convert from milliseconds to seconds
// d = Math.floor(Date.now() / 1000);

// console.log(d);
//date
let x;
let d = new Date();

// Date methods

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();
x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});

console.log(x);