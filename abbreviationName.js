/* const abbreviation = (firstname, lastname) => {
  let a = firstname.charAt(0).toUpperCase();
  let b = lastname.charAt(0).toUpperCase()s;
  return a + "." + b;
};

console.log(abbreviation("Thor", "Oddinson")); */

const abbreviation2 = name => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  let splitString = name.split(" ");
  return (
    splitString[0].charAt(0).toUpperCase() +
    "." +
    splitString[1].charAt(0).toUpperCase()
  );
};
console.log(abbreviation2("Tony Stark"));
