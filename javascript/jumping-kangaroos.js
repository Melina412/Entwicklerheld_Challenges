let numbers = [2, 0, 3];
numbers = [1, 0, 1];
// numbers = [1, 2, 1, 1];
// numbers = [2, 0, 1, 0, 3];
numbers = [1, 2, 1, 2, 1, 2];

function IsCompletable() {
  // # Scenario 1
  //   if (numbers[0] === numbers.length - 1) {
  //     console.log(true);

  //     return true;
  //   }

  // # Scenario 2
  let jumpLength = numbers[0];
  let position = 0;
  console.log('jumpLength:', jumpLength);
  console.log('position:', position);

  console.log('numbers length -1:', numbers.length - 1);

  while (position < numbers.length) {
    if (jumpLength === 0) {
      console.log(false);

      return false;
    }
    console.log('old position:', position);
    position += jumpLength;
    console.log('new position:', position);

    if (position === numbers.length - 1) {
      console.log(true);
      return true;
    }
    jumpLength = numbers[position];
    console.log('jumpLength:', jumpLength);
  }
  console.log(false);
  return false;
}

IsCompletable();
