function abbrevName(name){
    const array = name.split(" ");
    const initials = array.map((array) => array[0].toUpperCase()).join('.')
    return initials;
  }