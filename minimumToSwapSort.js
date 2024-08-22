function minSwaps(arr) {
  let n = arr.length;
  let vector = arr.map((value, index) => [value, index]);
  vector.sort((a, b) => a[0] - b[0]);
  let vis = new Array(n).fill(false);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (vis[i] || vector[i][1] === i) continue;
    let cycle_size = 0;
    let j = i;
    while (!vis[j]) {
      vis[j] = true;
      j = vector[j][1];
      cycle_size++;
    }
    if (cycle_size > 0) {
      ans += cycle_size - 1;
    }
  }
  return ans;
}
let arr = [3, 40, 2, 100, 6, 49, 50, 1];
let result = minSwaps(arr);
console.log(result);
