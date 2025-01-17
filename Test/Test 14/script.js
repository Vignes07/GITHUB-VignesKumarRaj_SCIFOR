function formatString(str) {
  let upperCase = str.toUpperCase();
  let lowerCase = str.toLowerCase();
  let substr = str.substring(2, 6);

  console.log(upperCase, lowerCase, substr);
}

formatString("HeLloWorlD");
