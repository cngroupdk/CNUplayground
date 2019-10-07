function wordsToMarks(word){
    let result = 0;
    
    for (let position = 0; position < word.length; position++) {
        result += word.charCodeAt(position) - 96
    }
       
    return result;
  }
  

  // verze od Lenky
  function wordsToMarks(word) {

    const charToNumber = char => char.toLowerCase().charCodeAt(0) - 96;
    const cumulativeSum = (acc, val) => acc + val;
    
    return word.split('').map(charToNumber).reduce(cumulativeSum, 0)
}