const animalYearsCount = (humanYears, animal) => {
    let base = 0;
    if(animal == 'cat') {
        base = 4;
    } else {
        base = 5;
    }

    switch (humanYears) {
        case 1:
            return 15;
        case 2: 
            return 24;
        default:
            return 24 + (humanYears - 2)*base;
    }
}
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = animalYearsCount(humanYears, 'cat');
    let dogYears = animalYearsCount(humanYears, 'dog');

    return[humanYears, catYears, dogYears]
}