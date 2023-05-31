setTimeout(() => {
  console.log("Hello Loveable");
  // To stop the interval timer
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("Every Second");
}, 1000);
