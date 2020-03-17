const Sequelize = require('sequelize').Sequelize;

let sequelize = new Sequelize('games', 'root','',{
  host:'localhost',
  dialect:'mysql'
  

});
//promise
sequelize
.authenticate()
.then(() => {
  console.log('MySQL connection successful.');

})
.catch((err) =>{
  console.error('MySQL connection error:',err);
})

module.exports = {
    sequelize
}