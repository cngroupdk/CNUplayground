var humanYearsCatYearsDogYears = function(humanYears) {
  const secondYear = humanYears >= 2 ? 1 : 0;
  const more2Years = humanYears >= 3 ? humanYears - 2 : 0;

  var catYears = 15 + 9 * secondYear + 4 * more2Years;
  var dogYears = 15 + 9 * secondYear + 5 * more2Years;

  return [humanYears, catYears, dogYears];
};
