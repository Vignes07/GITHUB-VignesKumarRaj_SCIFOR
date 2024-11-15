function calculate(operation, x, y) {
  switch (operation) {
    case "add":
      console.log("x + y = ", x + y);
      break;
    case "subtract":
      console.log("x - y = ", x - y);
      break;
    case "multiply":
      console.log("x * y = ", x * y);
      break;
    case "divide":
      console.log("x / y = ", y !== 0 ? x / y : "Cannot divide by zero");
      break;
    case "modulus":
      console.log("x % y = ", y !== 0 ? x % y : "Cannot divide by zero");
      break;
  }
}

calculate("add", 10, 5);
calculate("subtract", 10, 5);
calculate("multiply", 10, 5);
calculate("divide", 10, 5);
calculate("modulus", 10, 5);
