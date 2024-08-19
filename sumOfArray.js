function sum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
}

const arr = [1, 2, 3, 4, 5];
const res = sum(arr);
console.log(res);
