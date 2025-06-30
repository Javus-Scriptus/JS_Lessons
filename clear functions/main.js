const arr = [1, 2, 3, 4, 5];

const dirtyMultiply = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * value;
  }
  return arr;
};

const cleanMultiply = (arr, value) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * value);
  }
  return newArr;
};

const resultDirtyMultiply = dirtyMultiply(arr, 2);
const resultCleanMultiply = cleanMultiply(arr, 2);

console.log(resultDirtyMultiply);
console.log(arr);
console.log(resultCleanMultiply);

//forEach
//array.forEach(callback(currentValue, index, array)) sorts the array by elements

// const countries = ['Sierra Leone', 'Azerbaijan', 'India', 'US', 'Philippines'];

//for (let i = 0;  i < name.length; i++) {
// console.log(`Position:${i + 1}, Nem:${names[i]}
//)}

function logNames(item, index) {
  console.log(`Position:${index + 1}, Name:${item}`);
}

names.forEach(function logNames(item, index) {
  console.log(`Position:${index + 1}, Name:${item}`);
});

logNames.forEach(logNames);

const countries = ['Sierra Leone', 'Azerbaijan', 'India', 'US', 'Philippines'];

logNames.forEach(() => {});
logNames.forEach((item, index) =>
  console.log(`Position:${index}, Name:${item}`),
);
console.log(logNames);

//TODO Map
const prices = [500, 200, 150, 700, 100, 470];

// const lowerPrices = [];

// for (const price of prices) {
//   arrayPrices.push(price * 0.7);
//   console.log(lowerPrices);
// }

const lowerPriced = prices.map(price => {
  return price * 0.7;
});

console.log(lowerPriced)
console.log(prices)