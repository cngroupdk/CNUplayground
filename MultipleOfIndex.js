function multipleOfIndex(array) {
    let result = []
    for (i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            result.push(array[i]);
        }
    }
    return result;
}