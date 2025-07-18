//TODO Search

//TODO Element 1
const firstElem = document.querySelector('div p');
console.log(firstElem);
console.log(document);
console.log(typeof document);

//TODO element 2
const secondElem = document.querySelector('#elem');
console.timeLog(secondElem);

//TODO element 3
// const thirdElem = document.querySelector('first-elem')
const thirdElem = document.querySelector('js-first-elem');
console.log(thirdElem);

//TODO element 4
const fourthElem = document.querySelector('[title="hello"]');

console.log(fourthElem);

//TODO querySelectorAll

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

paragraphs.forEach(elem => console.log(elem));
console.log(paragraphs[2]);
console.log([...paragraphs]);

//TODO getElementById
const elem = document.getElementById('elem');
console.log(elem);

//TODO classList

console.log(elem.classList.add('red'));
console.log(elem);

console.log(elem.classList);

//TODO classes removement

elem.classList.remove('red');

console.log(elem);

//TODO class replacement

elem.classList.add('red');

elem.classList.replace('red', 'blue');

//TODO class existence check
//returns boolean value

console.log(elem.classList.contains('blue'));
console.log(elem.classList.contains('red')) ? elem.classList.contains('blue')
  : elem.classList.replace('blue', 'red')
   //TODO classList.toggle()

    console.log(elem.classList.toggle('blue')); //true

//TODO style

// elem.style.backgroundColor = 'blue';
// elem.style.fontSize = '40px';
// elem.style.width = '200px';

const fontSize = 'orange';
const bgc = 'blue';
const width = '1000px';

elem.style.cssText = `background-color ${bgc}; font-size: ${fontSize}; width: ${width}`;

// elem.style.cssText = 'background-color: blue; font-size: 40px; width: 200px,';

console.log(elem);

//TODO text replacement
elem.textContent = 'GIVE FREEDOM TO ANDROIDS'

//TODO navigation
const listElem = document.getElementById('elem')
console.log(listElem)

listElem.firstElementChild.style.color = 'red'