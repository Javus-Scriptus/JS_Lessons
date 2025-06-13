const user = {
    name: "Dmitryy",
    age: 21,
    hobby: "foreign languages learning"
}

const vipUser = Object.create(user)

vipUser.weight = 77
vipUser.iq = 102
vipUser.friends = 2
vipUser.hdi = 0.93
// console.log(user)

console.log(vipUser.weight)
console.log(vipUser.hobby)

const hasFriends = "friends" in vipUser
const hasLastName = "Vorshevskyy" in vipUser

console.log(hasFriends)
console.log(hasLastName)

//for in 

// for (const key in vipUser) {
//     console.log(`${key}: ${vipUser[key]}`)
// }

for (const key in vipUser) {
    if(vipUser.hasOwnProperty(key)) { // hasOwnProperty method
        console.log(`${key}: ${vipUser[key]}`)
    }
        
}

//Object.keys() and for...of

const keys = Object.keys(vipUser)
console.log(keys)

for (const key of keys) {
    console.log(`${key}: ${vipUser[key]}`)
}

//Object.values() and for...of

const salaries = {
    junior: 2500,
    mid: 4500,
    senior: 7500,
    teamLead: 11000,
}

const total = 0

const salariesToArray = Object.values(salaries)
console.log(salariesToArray)
let revenue = 0

for (const salary of salariesToArray) {
    console.log(`${salary} + ${salariesToArray}`)
}



