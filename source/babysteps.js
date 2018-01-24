const args = process.argv.slice(2);
function sum(numbers) {
  if (typeof numbers === 'undefined' || numbers.length === 0) { return 0; }
  return numbers.reduce((first, second) => Number(first) + Number(second));
}
// console.log(sum(args));
module.exports = sum;
