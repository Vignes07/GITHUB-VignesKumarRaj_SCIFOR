function reverseAndSortArray(array) {
  const reversedArray = array.reverse();
  console.log(reversedArray);

  const sortedArray = reversedArray.sort((a, b) => a.localeCompare(b));

  return sortedArray;
}

const arr = ["z", "a", "d", "c", "b"];
const result = reverseAndSortArray(arr);
console.log(result);
