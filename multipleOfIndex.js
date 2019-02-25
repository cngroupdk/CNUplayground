const numbers = [32, 33, 16, 40, 24, 25];

function multipleOfIndex(value, index) {
  return value % index == 0;
}

const result = numbers.filter(multipleOfIndex);

console.log(result);
