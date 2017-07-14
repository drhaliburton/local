//select all from cards where name of location is x (string)
//select all from cards where category = ''
// select all from cards where  duration is blah
module.exports = (knex) => {
const obj = {};

obj.getIndex = function(location){
    knex('card')
    .where("location", location)
  }

obj.getFiltered = function(object){

};


return obj;
}
