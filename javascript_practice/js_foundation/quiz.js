arr = [1, 2, "abc", true];
function filterNumbers(arr) {
  let newarr = [];
  for (const ele in arr) {
    if (!Object.hasOwn(arr, ele)) continue;
    if (typeof ele === Number) newarr.push(ele);
  }
  return newarr;
}
console.log(filterNumbers(arr));
