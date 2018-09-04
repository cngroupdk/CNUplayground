function wordsToMarks(string){
    let tmp = 0;
    for(let i = 0; i < string.length; i++) {
        tmp += string.charCodeAt(i) - 96;
    }
    return tmp;
}