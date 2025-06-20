const country = {
    name: 'Molossia',
    state: 'Republic',
    population: 2,
    landscape: 0.034
}

console.log(country)

// const { name, state, population, landscape, isOfficial = false, isLandlocked = true } = country
// console.log(name, state, population, landscape, isOfficial, isLandlocked)

// const {
//     country: copyOfCountry,
//     name,
//     state,
//     population,

// } = realState

console.log(country, name, state, population, landscape, isOfficial, isLandlocked)

//hotel
const hotel = {
    hotelName: 'Naama Blue',
    stars: 3,
    capacity: 700,
    rooms: {
        small: 25, 
        median: 60, 
        large: 90
    }
}

const {
    small,
     medium, 
     large

} = hotel.rooms

console.log(small)

const {
    hotelName, stars, ...rest
} = hotel

console.log(hotelName, stars, rest)

//user

const user = {
    userName: 'Mr Stark',
    age: '19',
    hobby: 'travelling',
    isHuman: 'false'
}

// const showUserInfo = () => {
//     console.log(`name: ${name}, age: ${age}, hobby: ${hobby}, isHuman: ${isHuman}`)
// }

// const { name, age, hobby, isHuman } = user

// showUserInfo(name, age, hobby, isHuman)\

const props = Object.entries(user)
console.log(props)

for (const prop of props) {
    console.log(prop)
    const [key, value] = prop
    console.log(`${key}: ${value}`)
}