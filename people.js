module.exports = {
  removeBad: function(people){
    return(people.filter(function (person){
        return person.name!=="B";
    }))
  },

  ageSome: function(people){
    return(people.filter(function (person){
        return person.name!=="B";
    }).filter(function( person){return person.age}).reduce(function(init, age){
        return init+age.age;
    }, 0))
  },
  ageAll:function(people){
    return (people.filter(function(person){return person.age}).reduce(function(init, age){
        return init+age.age;
    }, 0))
  }
}
