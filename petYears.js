const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 15;
  let catYears2 = 24;
  let dogYears = 15;
  let dogYears2 = 24;
  if (humanYears == 1) {
    return [humanYears, catYears, dogYears];
  }

  if (humanYears == 1 || humanYears == 2) {
    return [humanYears, (catYears += 9), (dogYears += 9)];
  }
  if (humanYears > 2) {
    return [
      humanYears,
      (catYears2 = catYears2 + (humanYears - 2) * 4),
      (dogYears2 = dogYears2 + (humanYears - 2) * 5)
    ];
  } else {
    return " age must be more than 0";
  }
};

console.log(humanYearsCatYearsDogYears(10));
