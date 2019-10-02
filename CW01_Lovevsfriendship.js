function wordsToMarks(string){
    let result = 0;
    for(i = 0; i < string.length; i++){
      result += string.charCodeAt(i)-96;
    }
    return result;
  }