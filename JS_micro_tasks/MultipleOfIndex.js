function multipleOfIndex(array) {
    return array.filter((item, index) => item % index === 0);
}