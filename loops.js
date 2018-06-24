function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push("I am 1 strange loop.");
    } else {
      array.push("I am ${i} strange loops.");
    }
  }
<<<<<<< HEAD
  return array;
}

function whileLoop(number) {
  let countDown = number;
  while (countDown > 0) {
    console.log(--countDown);
  }
  return 'done';
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  
  return array;
=======
>>>>>>> ff57d0f73d18b80c8c5afa54a7d323bb6a6075ee
}