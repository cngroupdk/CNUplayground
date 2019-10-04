/** Multiple of Index */

function multipleOfIndex(array) {
    return array.filter((elem, index) => {
        if (elem == 0 && index != 0) {
            return true;
        } else if (elem % index == 0) {
            return elem;
        }
    });
}