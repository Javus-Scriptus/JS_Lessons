const user = {
    age: 36,
    name: 'Eskimos',
    height: '197',
    location: {
        country: 'Greenland (Denmark)',
        city: 'Nuuk'
    },
}

const values = Object.entries(user) // .entreis creates an array for each pair of "key: value"

console.log(values)

for (const value of values) {
    // console.log(value[0]) // 0 gives an access to the keys. 1 give an acess to the values. Any other number returns undefined
    const key = value[0]
    const valueData = value[1]
    console.log((`${key}: ${valueData}`))
}

//concat
const numbers = [23, 71, 96, 104]

// const newNumbers = numbers.concat([-71, -1000, -391, [0]])
const newNumbers = numbers.slice()

console.log(numbers)
console.log(newNumbers)
console.log(numbers === newNumbers) //false

//spread ...

const ununitedNumbers = [...numbers] //create a "copy" of the existing array

console.log(ununitedNumbers === newNumbers) //false
console.log(ununitedNumbers === numbers) //false

//Maths
const max = Math.max(numbers)
console.log(max) //NaN. Requires "clear" numbers, not an array.

const spreadMax = Math.max(...numbers) //only numbers, not an array anymore
console.log(spreadMax) //104
console.log(typeof spreadMax) //number

//
const salary = [100, 300, 800]

const addSalaries = (x, y, z) => {
console.log(x + y + z)
}

// addSalaries(salary[0], salary[1], salary[2]) // sum of all salary's numbers
addSalaries(...salary) // numbers, not array
addSalaries(100, 400, 800) // numbers, not array


//case with same keys
const defaultSettings = {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,
    fontSize: 14,
    color: '255, 255, 255'
}

const userSettings = {
    fontFamily: 'Osphalt, sans-serif',
    fontWeight: 400,
    fontSize: 20,
    backgroundColor: "#000000",
}

const finalSettings = {
    ...defaultSettings,
    ...userSettings,
}

console.log(finalSettings) //if the keys are the same, it takes last existing

//
const sortingArray = [
    {
        name: 'Hannah',
        age: 20,
    },

    {
        name: 'Dmitry',
        age: 31,
    },

    {
        name: 'Vladimir',
        age: 36,
    }
]



for (const sort of sortingArray) {
    console.log(`${sort.name}: ${sort.age}`)
}