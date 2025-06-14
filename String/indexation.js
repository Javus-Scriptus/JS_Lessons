const lowerCase = 'Who Said You Can Type In Uppercase?'

console.log(lowerCase.length) // 10. Finds the length of the string by position
console.log(lowerCase.at(8)) // "w". Finds certain element by index 
console.log(lowerCase.at(-1)); // "a". Finds certain element by index from the end. forget about "0"
console.log(lowerCase.toLowerCase()) // printed in lowercase
console.log(lowerCase.toUpperCase()) // printed in uppercase
console.log(lowerCase.includes('Who', 0)) // true. Finds an element in the string by index
console.log(lowerCase.includes('In', 3)) // false
console.log(lowerCase.indexOf('Said')) // 4
console.log(lowerCase.startsWith("Can")); //false. Does not start with "Can"
console.log(lowerCase.endsWith("Can")); //false. Does not end with "Can"
console.log(lowerCase.padStart(36, "$")); // Adds requested symbol to the string. Expanded length required

wordWithSpaces = '    Remove my spaces!     '

console.log(wordWithSpaces.trim()); // removes spaces before and after the main text
