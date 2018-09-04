const humanYearsCatYearsDogYears = h => {
  return h === 1 ? [1,15,15] : h === 2 ? [2, 24, 24]: [h, 24 + (h-2)*4, 24 + (h-2)*5];
}

/* var humanYearsCatYearsDogYears = function(humanYears) {
    let result = [0,0,0];
    
    for(i = 1; i<= humanYears; i++){
      if(i === 1){
        result[0] += 1;
        result[1] += 15;
        result[2] += 15;
      } else if (i === 2){
        result[0] += 1;
        result[1] += 9;
        result[2] += 9;
      } else {
        result[0] += 1;
        result[1] += 4;
        result[2] += 5;
      }
    }
    return result;
  } */
  