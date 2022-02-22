function numArgs(...args) {
  console.log('You have passed ' + args.length + ' arguments.');
  if (args.length > 2) {
    console.log('The third argument is ' + args[2] + '.');
  }
}

numArgs(3, 5, 7);

const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4));
