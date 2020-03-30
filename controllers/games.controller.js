const {Game} = require('./../models/game');

let controller = {};

controller.read = function(req, res, next) {
//   res.send('respond with a resource');

    // let games = [
    //     {name: 'Bloodborne'},
    //     {name: 'Dark Souls 3'},
    //     {name: 'Monster Hunter World'}
    // ];
    // console.log(games);
    // res.render('games/index', {
    //     games: games
    // });

    console.log('Hello World!');

    //SELECT * FROM games;
    Game.findAll()
        .then((games) => {

            // console.log(games);

            //views/games/index.ejs
            res.render('games/index', {
                games: games
            });
        })
        .catch((err) => {
            console.error('Error trying to query games: ', err);
            res.render('games/index', {
                games: []
            });
        });
    
};


controller.delete = ( req, res, next) =>{
    let id = req.params.id;


    //DELETE FROM games WHERE id=4
    Game.destroy({
        where:{
            id:id
        }
    }) .then(() => {
        res.redirect('/games/');
    }).catch((err) => {
        console.error('Error trying to delete Game', err);
        res.redirect('/games/');
    });
};

controller.create = (req, res, next) => {
    console.log(req.query);

    res.render('games/form', {
        title: 'Create Game',
        action:'create'
    });
};

controller.createPost = (req,res,next)=> {
    console.log(req.body);
    
    
    let name = req.body.name;
    //if(name=== undefined || name=== null || name=== ''){
        if (!name || name === '') {
            return res.render('games/form', {errorMessage: 'Please type a valid name.'});
        }
    
    let game = {
        name,
    };
    
    Game.create(game)
    //exito
    .then(() => {
        res.redirect('/games');
    })
    
    //error 
    .catch((err) => {
        console.error('Error trying to create Game',err);
        res.render('games/fore');
    })
    
        ///res.send('t4grefdw');
    
    };

    controller.update = (req, res, next) => {
        let id = req.params.id;
        
        //SELECT * FROM games WHERE id = 4;
        Game.findAll({
            where: {
                id: id
            }
        }).then((games) => {
            let game = games[0];
    
            res.render('games/form', {
                game: game,
                title: 'Update Game',
                action:'update'
            });
    
        }).catch((err) => {
            console.error('Error trying to render update form', err);
            res.redirect('/games');
        });
    
        
    };

    controller.updatePost =(req, res, next) => {
        let id = req.body.id;
        let name = req.body.name;
    
        //game.name
        //game.id
    
        Game.update({
            name: name
        }, {
            where: {
                id: id
            }
        }).then(() => {
            res.redirect('/games');
    
        }).catch((err) => {
            console.error('Error trying to update Game', err);
            res.redirect('/games');
        })
    
    };
module.exports = controller;