function wordsToMarks(word) {
  var sum = 0;

  for (var c of word) {
    sum += c.charCodeAt(0) - "a".charCodeAt(0) + 1;
  }

  return sum;
}
