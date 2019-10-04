/** Animal Years */

var humanYearsCatYearsDogYears = function(humanYears) {
    catYears = 0;
    dogYears = 0;
    if (humanYears == 1) {
        catYears = dogYears = 15;
    } else if (humanYears == 2) {
        catYears = dogYears = 24;
    } else if (humanYears > 2) {
        let years = humanYears - 2;
        catYears = 24 + years*4;
        dogYears = 24 + years*5;
    }

    return [humanYears,catYears,dogYears];
  }