const humanYearsCatYearsDogYears = humanYears => {
  switch(humanYears){
    case 1:
      return [1,15,15]
    case 2:
      return [2, 24, 24]
    default:
      return [humanYears, getAnimalYears(humanYears, 4), getAnimalYears(humanYears, 5)]
  }
}

const getAnimalYears = (humanYears, animalYears) => (humanYears - 2) * animalYears + 24;
  