//Love & Friendship
function wordsToMarks(string) {
    return Array.prototype.map.call(string, char => char.toLowerCase().charCodeAt(0) - 96).reduce((a, b) => a + b, 0)
}

//Inline
const wordsToMarks = string => Array.prototype.map.call(string, char => char.toLowerCase().charCodeAt(0) - 96).reduce((a, b) => a + b, 0)
