const abbrevName = name => name.split(' ').reduce((a,b) => `${a[0]}.${b[0]}`).toUpperCase();

// Solution for more than 2 words in the name
// const abbrevName = name => name.split(' ').reduce(((a,b) => `${a}${b[0]}.`), '').slice(0,-1).toUpperCase();