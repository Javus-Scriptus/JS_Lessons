const apricot = "2";
const peach = "3";

console.log(apricot + peach); // 23
console.log(+apricot + +peach); // 5
console.log(typeof +apricot + +peach);

//TODO Шановний XY, для вас зарезервовано номер готелі Z на T днів. Гарного відпочинку!

const firstName = "Bogdan";
const lastName = "Bogomdan";
const hotelName = "Blue Mamba";
const daysQty = 7;
// const message = "Шановний" + ", " + firstName + " " + lastName + "!" + " Для вас зарезервовано номер готелі " + hotelName + " на " + daysQty + " днів. Гарного відпочинку!";

// console.log(message);

// Интерполляция - это когда мы используем ${} внутри строки

// const message = `Шановний ${firstName} ${lastName}! Для вас зарезервовано номер готелі ${hotelName} на ${daysQty} днів. Гарного відпочинку!`;
const message = `Шановний ${firstName} ${lastName}! 
Для вас зарезервовано номер готелі ${hotelName} на ${daysQty} днів. 
Гарного відпочинку!`;

console.log(message);
