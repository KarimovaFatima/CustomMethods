//* Array Every method

// ! Custom every method
// let numbers = [45, 485, 96, 7];

// function customEvery(callback, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (!callback(array[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// let test = customEvery((el) => {
//   return el > 1;
// }, numbers);
// console.log(test);

//! Custom some method
// let numbers = [45, 485, 96, 7];

// function customSome(callback, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       return true;
//     }
//   }
//   return false;
// }

// let test = customSome((el) => {
//   return el < 1;
// }, numbers);
// console.log(test);

//! Custom forEach method
let numbers = [45, 485, 96, 7];

function customForEach(callback, array) {
  for (let i = 0; i < array.length; i++) {
    return callback(array[i], i);
  }
}
let test = customForEach((element, index) => {
  return element;
}, numbers);

console.log(test);

//! Custom map method
// let numbers = [45, 485, 96, 7];

// function customMap(callback, array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     arr.push(callback(array[i]));
//   }
//   return arr;
// }

// let test = customMap((element) => element === 7, numbers);
// console.log(test);

//! Custom filter method
// let numbers = [45, 485, 96, 7];

// function customFilter(callback, array) {
//   let filter = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i])) {
//       filter.push(array[i]);
//     }
//   }
//   return filter;
// }

// let test = customFilter((el) => {
//   return el === 0;
// }, numbers);

// console.log(test);

//? find, some, every
