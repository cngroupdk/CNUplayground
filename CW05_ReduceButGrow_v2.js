function grow(inputArray){
    const reducer = (accumulator,currentValue) => accumulator*currentValue;
    return inputArray.reduce(reducer,1);
  }