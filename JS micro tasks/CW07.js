function check(a, x) {
  //return a.includes(x);
  return a.filter(item => (item == x ? true : false)).length > 0;
}
