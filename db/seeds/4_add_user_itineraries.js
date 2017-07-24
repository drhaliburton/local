
exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('users').where({id: 6}).select('id'),
    ])
    .then(res=>{

        const ids = (res || []).map(x =>{
            return x[0] ? x[0].id : {}
        });

        console.log(JSON.stringify(ids,null,2))
        const [
            rebeccaID
        ] = ids;
      return Promise.all([
        knex('itineraries').insert({title: 'Day Trip', user_id: rebeccaID})
      ]);
    });
};
