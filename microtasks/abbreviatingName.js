/** Abbreviating a Name */

function abbrevName(name){
    return name.split(" ").map(eachName => {return eachName.charAt(0).toUpperCase()}).join(".");
}