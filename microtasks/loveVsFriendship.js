const wordsToMarks = (string) => {
    return [...string].reduce((res, char) => {return res + char.charCodeAt() - 96}, 0);
}

//note [...string] formats string to char array format


console.log(wordsToMarks("love"));