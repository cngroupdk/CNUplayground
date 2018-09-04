function duplicateEncode(word){

  lowerCaseWord = word.toLowerCase();
  let chars = {}
  let result ="";
  
    
  for(let c of lowerCaseWord){
    chars[c]? chars[c] = ")" : chars[c] = "(";
  }
    
  for(let c of lowerCaseWord){
    result += chars[c];
  }
    
  return result;
}