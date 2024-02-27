function fibsRec(n) {
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    } else {
      const fibonacciArray = fibsRec(n - 1);
      const nextFibonacci = fibonacciArray[n - 1] + fibonacciArray[n - 2];
      fibonacciArray.push(nextFibonacci);
      return fibonacciArray;
    }
  }
  
  // Example usage:
  console.log(fibsRec(8));