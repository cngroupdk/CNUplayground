var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears==1)
      return [1,15,15];
    if(humanYears==2)
      return [2, 24, 24];
    return [humanYears, (humanYears-2)*4+24, (humanYears-2)*5+24];
  }