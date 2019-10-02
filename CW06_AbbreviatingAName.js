function abbrevName(name){
  let result = name[0]+".";
  for(i = 0; i <name.length; i++){
    if (name[i] == " ") result += name[i+1];
  }
  return result;
}