// Text knots creation

//TODO cpu
const titleEl = document.createElement('h3');
titleEl.textContent = 'AMD > Intel';
titleEl.classList.add('.cpu');

document.body.appendChild(titleEl);

console.log(titleEl);

//TODO img
const imgEl = document.createElement('img');
imgEl.src = 'https://gamesbeat.com/wp-content/uploads/2025/05/city_09.bmp';
imgEl.alt = 'Nate';
imgEl.width = '700';
imgEl.height = '400';

document.body.appendChild(imgEl);

console.log(imgEl);

//TODO hero
const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imgEl);

//TODO new menu's element
// const menuEl = document.querySelector('.nav')
// const menuEl = document.createElement('ul')
// const menuItemEl = document.createElement('li')
// menuEl = document.createElement('li')
// menuItemEl.classList.add('nav__item')

// const linkEl = document.createElement('a')
// linkEl.classList.add('nav-link')
// linkEl.textContent = 'Products'
// linkEl.href = '#'

// console.log(menuItemEl.appendChild(menuItemEl))

//TODO Color picker
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const option = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.type = buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = backgroundColor = option.color;

//TODO for method
// const elements = [];
// for (let i = 0; i < option.length; i++) {
//   const option = colorPickerOptions[i];
//   const buttonEl = document.createElement('button');

//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;
//   elements.push(buttonEl);
// }

// console.log(elements);

// const jsColorPickerContainer = document.querySelector('.js-color-picker');
// jsColorPickerContainer.append(...elements);

//TODO map method
// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.type = buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = backgroundColor = option.color;
//   return buttonEl;
// });

// console.log(elements);

//TODO function
const makeColorPickerOptions = options => {
  return options.map(options => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.type = buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = backgroundColor = option.color;
    return buttonEl;
  });
};

// const elements = makeColorPickerContainer = document.querySelector('.js-color-picker')
// jsColorPickerContainer.append(...elements)

//TODO innerHTML
const headlineEl = document.querySelector('.title');
console.log(headlineEl.innerHTML);
console.log(headlineEl.innerContent);
console.log(headlineEl.innerText);

headlineEl.innerHTML = '<a href="headline">Headline</a>';
headlineEl.insertAdjacentHTML('beforebegin', '<a href="headline">Headline</a>');
headlineEl.insertAdjacentHTML('afterebegin', '<a href="headline">Headline</a>');
headlineEl.insertAdjacentHTML('beforeend', '<a href="headline">Headline</a>');
headlineEl.insertAdjacentHTML('afterbegin', '<a href="headline">Headline</a>');

//TODO users
import users from './users.js';

const listEl = document.getElementsById('users');

// function createMarkup(users) {
//   const createMarkup = users => {
//     return users
//       .map(({ name, age, eyeColor }) => {
//         `<li>
//             <h2${name}</h2>
//             <p>${age}</p>
//             <span>eyeColor:</span>
//             <span style="background-color:${eyeColor}"></span>
//         </li>`;
//       })
//       .join('');
//   };
// }

function createMarkup(users) {
  const createMarkup = users => {
    return users
      .map(user => {
        `<li>
            <h2${user.name}</h2>
            <p>${user.age}</p>
            <span>eyeColor:</span>
            <span style="background-color:${user.eyeColor}"></span>
        </li>`;
      })
      .join('');
  };
}
listEl.innerHTML = createMarkup(users);
