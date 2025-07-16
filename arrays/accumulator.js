const numbers = [1, 2, 3, 4, 5];

const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 0); // initial value

// accumulator (acc) -  represents a previous number
// number - represents a single number on every iteratio

console.log(total); // 15

//itr1 acc = 0 => number = 1 => 0 + 1
//itr2 acc = 1 => number = 2 => 1 + 2
//itr3 acc = 3 => numebr = 3 => 3 + 3
//itr4 acc = 6 => nubmer = 6 => 4
//itr5 acc = 10 = number = 10 => 10 + 5

//TODO Salaries

const salaries = {
  trainee: 1600,
  junior: 2300,
  juniorPlus: 2800,
  middle: 3500,
  middlePlus: 4500,
  senior: 6000,
  teamLead: 8000,
  independentDeveloper: 10000,
};

const salaryArray = Object.values(salaries);
console.log(salaryArray);

const totalSalary = salaryArray.reduce((total, salary) => total + salary);
console.log(totalSalary);

//TODO hours worked per week

const hoursWorkedPerWeek = [
  { day: 'Mon', count: 9 },
  { day: 'Tue', count: 10 },
  { day: 'Wed', count: 11 },
  { day: 'Thu', count: 5 },
  { day: 'Fri', count: 12 },
];

const hoursCount = hoursWorkedPerWeek.reduce((acc, dayInfo) => {
  // console.log(dayInfo);
    return acc + dayInfo.count;
    
}, 0);

console.log(hoursCount);
