const myFunc = () => {
  const myVar = "value";
  return myVar;
}

const myNewFunc = () => "value";

console.log(myFunc());
console.log(myNewFunc());

const pow = (base, power) => base**power;
console.log(pow(2, 2));
const doubler = item => item * 2; 
console.log(doubler(2));
