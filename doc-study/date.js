// Test the constructor
const date = new Date();

console.log('Date()\n' + date);
console.log('\nDate(value)\n' + new Date(10));
console.log('\nDate(dateString)\n' + new Date('2022-01-22T13:15'));
console.log('\nDate(dateObject)\n' + new Date(date));

console.log('\nDate(year, monthIndex)\n' + new Date(2022, 0));
console.log('\nDate(year, monthIndex, day)\n' + new Date(2022, 0, 22));
console.log('\nDate(year, monthIndex, day, hours)\n' + new Date(2022, 0, 22, 13));
console.log('\nDate(year, monthIndex, day, hours, minutes)\n' + new Date(2022, 0, 22, 13, 18));
console.log('\nDate(year, monthIndex, day, hours, minutes, seconds)\n' + new Date(2022, 0, 22, 13, 18, 30));
console.log('\nDate(year, monthIndex, day, hours, minutes, seconds, milliseconds)\n' + new Date(2022, 0, 22, 13, 18, 30, 200));
