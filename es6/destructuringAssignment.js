const object = {
  item1: 1,
  item2: 2,
  item3: 3
};

const { item1, item2, item3 } = object;
console.log(item1);
console.log(item2);
console.log(item3);

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
}

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today);
console.log(tomorrow);
