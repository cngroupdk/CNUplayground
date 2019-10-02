function wordsToMarks(word){
    let result = 0;
    
    for (let position = 0; position < word.length; position++) {
        result += word.charCodeAt(position) - 96
    }
       
    return result;
  }
  