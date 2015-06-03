var people = require('./people.js');

var list = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];

console.log(people.removeBad(list));
console.log(people.ageSome(list));
console.log(people.ageAll(list));
