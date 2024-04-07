function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzbuzz';
  } else if (number % 3 === 0 && number % 5 !== 0) {
    return 'fizz';
  } else if (number % 5 === 0 && number % 3 !== 0) {
    return 'buzz';
  } else {
    return number;
  }
}

// console.log(fizzbuzz(1));
// console.log(fizzbuzz(2));
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(4));
// console.log(fizzbuzz(5));
// console.log(fizzbuzz(6));
// console.log(fizzbuzz(15));
