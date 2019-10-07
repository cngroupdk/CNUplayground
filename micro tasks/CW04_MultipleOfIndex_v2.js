function multipleOfIndex(inputArray) {
    return inputArray.filter((value,index)=>value%index===0);
  }