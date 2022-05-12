//1.Write a function identity that takes an argument and returns that argument
const identity = (x) => {
  return x;
};
identity(5); //returns 5

//2.Write a binary function addb that takes two numbers and returns their sum
const addb = (x, y) => {
  return x + y;
};
addb(5, 6); //return 11
//3.Write a binary function subb that takes two numbers and returns their difference
const subb = (x, y) => {
  return x - y;
};
subb(11, 3); //return 8

//3.Write a binary function mulb that takes two numbers and returns their product
const mulb = (x, y) => {
  return x * y;
};

//4.Write a binary function minb that takes two numbers and returns the smaller one
const minb = (x, y) => {
  if (x > y) {
    return y;
  } else {
    return x;
  }
};

//5.Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (x, y) => {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};
//7.Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
  return nums.reduce((a, b) => a + b);
};
add(2, 4, 2, 1, 4); //return 13

//8.Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
  return nums.reduce((a, b) => a - b);
};
sub(1, 2, 4);

//9.Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
  return nums.reduce((a, b) => a * b);
};
mul(1, 2, 4);

// Write a binary function min that takes two numbers and returns the smaller one
const min = (a, b) => (a < b ? a : b);

// Write a binary function max that takes two numbers and returns the larger one
const max = (...nums) => {
  return nums.reduce((a, b) => (a > b ? a : b));
};

module.exports = {
  identity,
  addb,
  subb,
  mulb,
  minb,
  maxb,
  add,
  sub,
  mul,
  min,
  max,
};
