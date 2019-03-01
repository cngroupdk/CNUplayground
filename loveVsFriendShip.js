function wordsToMarks(string) {
  return string
    .toLowerCase()
    .split("")
    .map(x => x.charCodeAt(0) - 96)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}
