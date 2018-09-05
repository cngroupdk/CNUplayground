function wordsToMarks(string){
  return [...string]
    .reduce(((sum, char) => sum += char.charCodeAt()-96),0);
}