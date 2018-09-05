const abbrevName = (name) => {
    let nameSplit = name.split(' ');
    return (`${nameSplit[0].charAt(0)}.${nameSplit[1].charAt(0)}`).toUpperCase();
}