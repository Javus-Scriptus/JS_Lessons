const userName = "Boris";
console.log(userName);

const arrowFn = (europe, asia) => {
  let japan;
  asia = true;
  europe = false;
  japan = europe || asia;
  return japan;
};

const myObject = {
  name: "Bogdan",
  lastName: "Bogom dan",
};

console.log(myObject);
console.log(arrowFn);
