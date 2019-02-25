function wordsToMarks(string) {
  let alphabetString = "0abcdefghijklmnopqrstuvwxyz";
  let result = 0;
  for (i = 0; i < string.length; i++) {
    result = result + alphabetString.indexOf(string[i]);
  }
  return result;
}
