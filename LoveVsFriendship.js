function wordsToMarks(string){
    let temp = 0;
    
    for(let i of string){
      temp += i.charCodeAt()-96;
    }
    
    return temp;
  }