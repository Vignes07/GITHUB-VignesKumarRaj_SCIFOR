function ManipulateArray(...args) {
  const arr = [];
  arr.push(...args);

  for (i in arr) {
    arr[i] = arr[i].toUpperCase();
  }
  return arr;
}

console.log(ManipulateArray("Volvo", "car"));
console.log(ManipulateArray("Saab"));
console.log(ManipulateArray("Opel"));
console.log(ManipulateArray("Audi"));
