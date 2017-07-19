
exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('users').where({given_name: 'Aisha'}).select('id'),
        knex('users').where({given_name: 'Holden'}).select('id'),
        knex('users').where({given_name: 'Shauna'}).select('id'),
        knex('users').where({given_name: 'Rebecca'}).select('id'),

        knex('categories').where({name: 'outdoors'}).select('id'),
        knex('categories').where({name: 'food'}).select('id'),
        knex('categories').where({name: 'shopping'}).select('id'),
        knex('categories').where({name: 'culture'}).select('id'),
        knex('categories').where({name: 'spas & wellness'}).select('id'),
        knex('cards').del('cards')
    ])
    .then(res=>{

        const ids = (res || []).map(x =>{
            return x[0] ? x[0].id : {}
        });

        console.log(JSON.stringify(ids,null,2))
        const [
            aishaID,
            holdenID,
            rebeccaID,
            shaunaID,
            outdoorID,
            foodID,
            shoppingID,
            cultureID,
            spaID
        ] = ids;
      return Promise.all([
        knex('cards').insert({title: 'Duncans Cove', location:'(44.4998677, -63.5526802)', description:"A small rural community on the Chebucto Peninsula in the Halifax Regional Municipality on the shore of the Atlantic Ocean on the Ketch Harbour Road.", duration: 180, user_id:rebeccaID, category_id: outdoorID}),
        knex('cards').insert({title: 'Johns Lunch', location: '(44.650544, -63.5491027)', description: 'it has legendary, no-frills landmark near the wharf known for straight-up fish ’n’ chips', duration: 120, user_id: rebeccaID, category_id: foodID}),
        knex('cards').insert({title: 'Oak Island', location:'(44.513705, -64.3017418)', description: 'The tree-covered island is one of about 360 small islands in Mahone Bay and rises to a maximum of 11 meters above sea level', duration: 240 , user_id: rebeccaID, category_id: outdoorID}),
        knex('cards').insert({title: 'Ballantyne', location:'(45.8449557, -61.9474314)' , description:'this community in Antigonish County, Nova Scotia, Canada, lies on a small cove of the same name at the north-western end of St. George Bay' , duration: 480, user_id: rebeccaID, category_id: cultureID}),
        knex('cards').insert({title: 'Cow Bay', location:'(44.6251993,-63.4505825)', description: 'Cow Bay is a community within Halifax Regional Municipality Nova Scotia on the Eastern Shore on Route 322 along the Marine Drive scenic route.', duration: 120 , user_id: rebeccaID, category_id: outdoorID}),
        knex('cards').insert({title: 'Long Lake Provincial Park', location:'(44.6214303,-63.627209)', description:'Long Lake is a provincial park controlled by the Department of Natural Resources (DNR) of the Government of Nova Scotia.', duration: 180 , user_id: rebeccaID, category_id: outdoorID}),
         knex('cards').insert({title: 'Kiwi Cafe', location:'(44.5429509,-64.2403276)' , description:'This cafe has delicious, homemade baked treats, wonderful soups and lunches, and a famous all-day breakfast.', duration: '90' , user_id: rebeccaID, category_id: foodID}),
        knex('cards').insert({title: 'Halifax Seaport Farmers Market', location:'(44.6408885,-63.5683414)', description: 'The Halifax Farmers Market is the oldest continuously operating farmers market in North America having been founded in 1750.', duration: 60, user_id: rebeccaID, category_id: foodID}),
        knex('cards').insert({title: 'Stillwell Beer Garden', location:'(44.6422777,-63.5815867)', description:'Located on Barrington Street in downtown Halifax, Stillwell is the place to go for great craft beers from Nova Scotia’s flourishing craft brewing community and beyond', duration: 100 , user_id: rebeccaID, category_id: outdoorID}),
        knex('cards').insert({title:'The Manx Pub', location:'(45.4188883,-75.69327)', description:'Art-lined subterranean watering hole with a globally inspired pub-grub menu & occasional live music.', duration: 100, user_id: shaunaID, category_id: foodID }),
        knex('cards').insert({title: 'National Gallery of Canada', location:'(45.429535,-75.7010949)', description:'The National Gallery of Canada, located in the capital city of Ottawa, Ontario, is one of Canadas premier art galleries.', duration: 180 , user_id: shaunaID, category_id: cultureID}),
        knex('cards').insert({title:'El Camino', location:'(45.4144371,-75.6955926)', description:'Contemporary Mexican plates pair with assorted tequilas at this hip spot with a take-out window.', duration: 90, user_id: shaunaID, category_id: foodID}),
        knex('cards').insert({title: 'Fauna', location:'(45.4125349,-75.6959099)' , description:'Rustic, stylish eatery serving elevated, locally-sourced New Canadian small plates.', duration: 90 , user_id: shaunaID, category_id: foodID}),
        knex('cards').insert({title:'ORESTA Organic Skin Care Confectionery', location:'(45.4080736,-75.6880368)', description:'A organic skin care store offering spa services in Ottawa', duration: 120, user_id: shaunaID, category_id: spaID}),
        knex('cards').insert({title: 'Gateway of india', location:'(18.9219841,72.8324656)', description:'Grand, Indo-Saracenic-style, 26m-tall triumphal stone arch, built on the waterfront in 1924', duration: 80 , user_id: aishaID, category_id: cultureID}),
        knex('cards').insert({title: 'Hauz Khas', location:'(28.5501207,77.1882317)', description:'Hauz Khas is an affluent neighbourhood in South Delhi, its heart being the historic Hauz Khas Complex', duration: 150, user_id: aishaID, category_id: cultureID})
      ]);
    });
};
