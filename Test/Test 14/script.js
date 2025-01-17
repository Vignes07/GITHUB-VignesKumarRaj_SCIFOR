function formatString(str) {
  let upperCase = str.toUpperCase();
  let lowerCase = str.toLowerCase();
  let substr = str.substring(2, 5);

  console.log(
    "Upper Case : " +
      upperCase +
      "\n" +
      "Lower Case : " +
      lowerCase +
      "\n" +
      "Sub String of 2, 5 : " +
      substr
  );
}

formatString("HeLloWorlD");
