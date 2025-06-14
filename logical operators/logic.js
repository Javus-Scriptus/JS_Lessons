// TODO logical 'and'
const a = 5;
const b = 10;
const c = 15;
const result = a < b && b < c; // 5 < 10 && 10 < 15. True && 10 < 15
const result2 = a > c && b < c;

// console.log(result); //true
// console.log(result2);

const maths1 = "Bogdan";
const maths2 = 10;
const maths3 = null;

console.log(maths1 && maths2 && maths3); // 'string' && 10 && null
console.log(maths1 && maths2 && maths1.length > maths2); // false
console.log(maths2 && maths1); // 'string' && 10 && null

// TODO logical 'or'
console.log(a < b || b < c); // true
console.log(a > b || b < c); // true

// TODO logical 'not' (inverse) !=

const firstVar = 5;
const secondVar = "What's now?";
const thirdVar = null;

console.log(Boolean(!firstVar)); // false. Such varibale exists
console.log(Boolean(!thirdVar)); // true. Go away, null!

// null coalescing operator(??). Returns first argument if it is not null/undefined, otherwise returns the second argument
const nullValue = null;
const defaultName = "Bogdan";
const nco = nullValue ?? defaultName;

console.log(nco); // Bogdan. first value is null, so NCO chose 2nd value

const firstValue = false
const lastValue = null

console.log(firstValue ?? lastValue); // false. first value is not null/undefined, so NCO chose 1st value
