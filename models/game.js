const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('./../config/db')
const Model = Sequelize.Model;
class Game extends Model {};
Game.init({

    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },

},{
    sequelize,
    modelName : 'game',
    //set a custom table name
    // freezeTableName: true,
    //tableName: 'game'
});
//Game.sync();
module.exports = {Game};