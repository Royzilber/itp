for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {                 // Check for Fizz first
        console.log("Fizz");
    } else if (i % 5 === 0) {          // Then check for Buzz
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {  // Check for FizzBuzz last
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}