function abbrevName(name) {
  return name
    .split(" ")
    .reduce((acc, name) => {
      return (acc += name.slice(0, 1).toUpperCase() + ".");
    }, "")
    .slice(0, 3);
}
