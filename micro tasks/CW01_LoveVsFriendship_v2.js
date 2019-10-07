function wordsToMarks(textInput){
    const arrayOfChar = text => text.split(``);
    const charToNumber = char => char.charCodeAt(0)-96;
    const cumulativeSum = (accumulator, currentValue) => accumulator+currentValue;
    
  
    return arrayOfChar(textInput).map(charToNumber).reduce(cumulativeSum);
    }