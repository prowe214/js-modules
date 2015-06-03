require('./people.js');

var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

console.log(people.removeBad(people));
console.log(people.ageSome(people));
console.log(people.ageAll(people));
