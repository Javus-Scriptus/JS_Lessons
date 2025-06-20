const numbers = [100, 200, 300]

// const [valueOne, valueTwo, valueThree] = numbers
const [valueOne, valueTwo] = numbers

// console.log(valueOne, valueTwo, valueThree) 
console.log(valueOne, valueTwo)

//array of objects

const classmates = [
    {name: 'Nazar',
        age: 17,
    },
    {name: 'Taras', age: 16,},
     {
        name: 'Igor', age: 15
     }
]

const [,,{ // ,, - Igor. , - Taras
    name
}] = classmates

console.log(name)

// season of the year
const message = 'Summer, June, Friday'

console.log(message.split(' '))

const [season, month, day] = message.split(' ')

console.log(season, month, day)
