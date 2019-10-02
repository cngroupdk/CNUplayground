var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0
    let dogYears = 0
    
    if(humanYears >= 1){
        catYears += 15
        dogYears += 15
        if(humanYears >= 2){
            catYears += 9
            dogYears += 9
            if(humanYears >= 3){
                const additionalYears = humanYears - 2
                catYears += additionalYears * 4
                dogYears += additionalYears * 5 
            }
            else null;
        }
    else null;
    }
    else null;
    
    return [humanYears,catYears,dogYears];
  }

  console.log(humanYearsCatYearsDogYears)