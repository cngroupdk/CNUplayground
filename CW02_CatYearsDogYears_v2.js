const humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears==1)
      return [1,15,15];
    if(humanYears==2)
      return [2, 24, 24];
    const catYears = (humanYears-2)*4+24;
    const dogYears = (humanYears-2)*5+24;
    return [humanYears, catYears, dogYears];
  }