/** Love vs Friendship */

function wordsToMarks(string) {
    let sum = 0;
    string.split('').map(character => {
        let number = character.charCodeAt(0) - 96;
        sum += number;
    });

    return sum;
}