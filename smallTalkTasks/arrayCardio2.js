const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const someOldEnough = people.some(person => person.year <= 1999);
console.log('is at least one person 19 or older?', someOldEnough);
console.log('<======================================================>');
// Array.prototype.every() // is everyone 19 or older?
const everyOldEnough = people.every(person => person.year <= 1999);
console.log('is everyone 19 or older?', everyOldEnough);
console.log('<======================================================>');
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(comment => comment.id === 823423);
console.log(findComment);
console.log('<======================================================>');
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteComment = comments.findIndex(comment => comment.id === 823423);
console.log(comments);
comments.splice(deleteComment, 1);
console.log('<======================================================>');
console.log(comments);
