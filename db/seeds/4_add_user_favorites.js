
exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('users').where({given_name: 'Aisha'}).select('id'),
    ])
    .then(res=>{

        const ids = (res || []).map(x =>{
            return x[0] ? x[0].id : {}
        });

        console.log(JSON.stringify(ids,null,2))
        const [
            aishaID
        ] = ids;
      return Promise.all([
        knex('favorites').insert({card_id: 1, user_id: aishaID}),
        knex('favorites').insert({card_id: 2, user_id: aishaID}),
        knex('favorites').insert({card_id: 3, user_id: aishaID}),
        knex('favorites').insert({card_id: 4, user_id: aishaID})
      ]);
    });
};
