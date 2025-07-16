//TODO Array.sort()

const originalNumbers = [36, 85, 39, 91, 45];

const sortedNumbers = [...originalNumbers].sort(); // prevent mutation
//const sortedNumbers = originalNumbers.slice().sort()

console.log(originalNumbers);
console.log(sortedNumbers);

const originalLetters = ['e', 'A', 'D', 'c', 'E', 'a', 'B', 'd', 'C', 'b'];

const sortedLetters = originalLetters.slice().sort();

console.log(originalLetters);
console.log(sortedLetters);

//TODO localCompare()
// compareFn()
// 1. compareFn(a, b) => result < 0
// If the difference of subtracting of element from the table equal below 0, we get the first possible element

//TODO time played
const players = [
  { id: 'plOne', name: 'Takumi46', timePlayed: 128, online: false },
  { id: 'plTwo', name: 'Xent', timePlayed: 783, online: true },
  { id: 'plThree', name: 'Corbie', timePlayed: 1385, online: true },
  { id: 'plFour', name: 'Opss', timePlayed: 1178, online: false },
];

console.log([...players]);

const sortByTimePlayed = [...players].sort(
  (currentPlayer, nextPlayer) =>
    nextPlayer.timePlayed - currentPlayer.timePlayed,
);

console.table(sortByTimePlayed);

//TODO
const sortByTimePlayedReverse = [...players].sort(
  (currentPlayer, nextPlayer) =>
    nextPlayer.timePlayed - currentPlayer.timePlayed,
);

console.table(sortByTimePlayedReverse);

//TODO
const sortedByName = [...players].sort(
  (majorName, minorName) => minorName.name.length - majorName.name.length,
);

console.table(sortedByName);

//TODO
const sortedByNameOptimized = [...players].sort((a, b) => {
  // console.log(a.name[0]);
  const result = a.name[0] > b.name[0];
  if (result) {
    return 1;
  } else if (!result) {
    return -1;
  }
});

console.table(sortedByNameOptimized);

//TODO inverntors
import inverntors from './inventors.js';

const byBorn = [...inverntors].sort((a, b) => a.born - b.born);
console.table(byBorn);