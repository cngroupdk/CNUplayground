const humanYearsCatYearsDogYears = humanYears => {
    let cat
    let dog
    switch (humanYears) {
        case 1:
            dog = 15
            cat = 15
            break
        case 2:
            dog = 24
            cat = 24
            break
        default:
            dog = 24 + (humanYears - 2) * 5
            cat = 24 + (humanYears - 2) * 4
    }
    return [humanYears, cat, dog]
}