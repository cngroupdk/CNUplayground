function multipleOfIndex(array) {
    const newArray = array.filter((item, index) => item % index == 0);
    return newArray;
}
