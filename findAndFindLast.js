// find method use

// const users = [
//   { id: 1, name: "raja", age: 23 },
//   { id: 2, name: "raja2", age: 22 },
//   { id: 3, name: "raja3", age: 13 },
//   { id: 4, name: "raja4", age: 42 },
//   { id: 5, name: "raja5", age: 20 },
//   { id: 6, name: "raja6", age: 10 },
//   { id: 7, name: "raja7", age: 21 },
//   { id: 8, name: "raja8", age: 14 },
//   { id: 9, name: "raja9", age: 25 },
// ];
// const result = users.find((user) => user.age > 20);
// console.log(result);

// find method are founf  the first macthing  results

// ===================================================
// findlast method use

// const users = [
//   { id: 1, name: "raja", age: 23 },
//   { id: 2, name: "raja2", age: 22 },
//   { id: 3, name: "raja3", age: 13 },
//   { id: 5, name: "raja5", age: 20 },
//   { id: 6, name: "raja6", age: 10 },
//   { id: 7, name: "raja7", age: 21 },
//   { id: 8, name: "raja8", age: 14 },
//   { id: 9, name: "raja9", age: 25 },
//   { id: 4, name: "raja4", age: 42 },
// ];
// const result = users.findLast((user) => user.age > 20);
// console.log(result);

//=======================================================
// findlastIndes method use

// const users = [
//   { id: 1, name: "raja", age: 23 },
//   { id: 2, name: "raja2", age: 22 },
//   { id: 3, name: "raja3", age: 13 },
//   { id: 5, name: "raja5", age: 20 },
//   { id: 6, name: "raja6", age: 10 },
//   { id: 7, name: "raja7", age: 21 },
//   { id: 8, name: "raja8", age: 14 },
//   { id: 9, name: "raja9", age: 25 },
//   { id: 4, name: "raja4", age: 42 },
// ];
// const result = users.findLastIndex((user) => user.age > 20);
// console.log(result);

// ========================================================
const users = [
  { id: 1, name: "raja", age: 23 },
  { id: 2, name: "raja2", age: 22 },
  { id: 3, name: "raja3", age: 13 },
  { id: 5, name: "raja5", age: 20 },
  { id: 6, name: "raja6", age: 10 },
  { id: 7, name: "raja7", age: 21 },
  { id: 8, name: "raja8", age: 14 },
  { id: 9, name: "raja9", age: 25 },
  { id: 4, name: "raja4", age: 42 },
];
const result = users.findIndex((user) => user.age > 20);
console.log(result);
