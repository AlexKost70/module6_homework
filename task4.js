function numCounter(num1, num2) {
    let counter = setInterval(function() {
      console.log(num1);
      if (num1 == num2) {
        clearInterval(counter);
      }
      num1++;
    }, 1000);
}