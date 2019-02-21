function multipleOfIndex(array) {
  return array.filter((num, index) => (num % index == 0 ? true : false));
}
