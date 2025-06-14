//TODO Branching operators

// if ... else construct
const boolean = false;

if (boolean === true) {
  console.log("Welcome!");
} else {
  console.log("Get lost!");
}

//TODO  if ... else if ... else construct (age checking)
const age = 21;
const isAdult = true;

if (age < 18) {
  console.log("You are a minor! Don't tryna trick us!");
} else if (age <= 18) {
  console.log("Go on!");
} else if (isAdult === true) {
  console.log("Go on!");
} else {
  console.log("Get lost! You are not welcome here!");
}

//TODO  price checking
const balance = 100;
const price = 34.99;

// if (balance >= price) {
//   console.log("Sir, the item is available to purchase!");
// } else {
//   console.log(
//     "Our appologizes. Sir, Your bank account does not have enough amount to afford this item ((",
//   );
// }

//TODO Ternary operator. Condition ? true : false
balance >= price //
  ? console.log("Sir, the item is available to purchase!")
  : console.log(
      "Our appologizes. Sir, Your bank account does not have enough amount to afford this item ((",
    );

//TODO exam graduation

const currentScore = 55;

// if (currentScore >= 90) {
//   console.log("A");
// } else if (currentScore >= 80) {
//   console.log("B");
// } else if (currentScore >= 70) {
//   console.log("C");
// } else if (currentScore >= 60) {
//   console.log("D");
// } else if (currentScore >= 50) {
//   console.log("E");
// } else if (currentScore >= 40) {
//   console.log("F");
// } else {
//   console.log("You haven't passed the exam ((");
// }

if (currentScore >= 90) {
  console.log("A");
} else if (currentScore >= 80 && currentScore < 90) {
  console.log("B");
} else if (currentScore >= 70 && currentScore < 80) {
  console.log("C");
} else if (currentScore >= 60 && currentScore < 70) {
  console.log("D");
} else if (currentScore >= 50 && currentScore < 60) {
  console.log("E");
} else if (currentScore >= 40 && currentScore < 50) {
  console.log("F");
} else {
  console.log("You haven't passed the exam ((");
}

// TODO else if

const bankAccount = 70000;
let discount;

// if (bankAccount => 1000 && bankAccount <= 3000) {
//   discount = 5;
// } else if (bankAccount >= 3000 && bankAccount <= 10000) {
//   discount = 10;
// } else if (bankAccount >= 10000 && bankAccount <= 30000) {
//   discount = 20;
// } else if (bankAccount >= 30000 && bankAccount <= 50000) {
//   discount = 30;
// } else if (bankAccount >= 50000 && bankAccount <= 50001) {
//   discount = 50;
// } else
//   console.log(
//     `Sir, discount is not provided for your price amount. Your current amount is ${bankAccount}`,
//   );

// console.log(discount);

//TODO switch
// switch (true) {
//   case bankAccount >= 1000 && bankAccount <= 3000:
//     discount = 5;
//     break;
//   case bankAccount > 3000 && bankAccount <= 10000:
//     discount = 10;
//     break;
//   case bankAccount > 10000 && bankAccount <= 30000:
//     discount = 20;
//     break;
//   case bankAccount > 30000 && bankAccount <= 50000:
//     discount = 30;
//     break;
//   case bankAccount > 50000 && bankAccount <= 50001:
//     discount = 50;
//     break;
//   default:
//     console.log(
//       `Sir, discount is not provided for your price amount. Your current amount is ${bankAccount}`,
//     );
// } TODO switch method is not appropriate for diaposon conditions

if (discount !== undefined) {
  console.log(`Your discount is ${discount}%`);
}

console.log(discount);

// TODO language case

let lang = "jp";
let introduction;

switch (lang) {
  case "en":
    introduction = "Hello! It's English now.";
    break;

  case 'ru':
    introduction = "Здравствуйте! Текущий язык - русский.";
    break;

  case 'jp':
    introduction = "こんにちは！今は日本語です！";
    break;

  case 'sp':
    introduction = "Hola! Ahora idioma es Espanhol.";
    break;

  case 'de':
    introduction = "Hallo! Jetzt reden wir nur auf Deutsch!";
    break;
  default:
    introduction = "I'LL COLONIZE YOU!"
}

console.log(introduction)
