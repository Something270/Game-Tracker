var express = require('express');
var router = express.Router();
const {Game}=require('./../models/game');

/* GET games listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');

 //let games = [
    // {name: 'Bloodborne'},
     //{name: 'Dark Souls 3'},
     //{name:'Overwatch'}

 //];
Game.findAll()
.then((games) => {
    res.render('games/index',{
        games:games
    });
})
.catch((err) =>{
    console.error('Error trying to query games:',err);
    res.render('games/index',{
        games:[]
    });
});


// console.log(games);

//res.render('games/index', {games: games})


});
router.post('/delete/:id',(req,res,next) =>{
    let id = req.paramms.id;

    Games.destroy({
        where:{
            id:id
        }
    })
})
router.get('/create',(req,res,next)=> {
    console.log(req.query)
    res.render('games/form');

});
router.post('/create',(req,res,next)=> {
console.log(req.body);


let name = req.body.name;
if(name=== undefined || name=== null || name=== ''){
   return res.render('games/form',{errorMessage:'please type a valid name.'});
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

});
module.exports = router;
