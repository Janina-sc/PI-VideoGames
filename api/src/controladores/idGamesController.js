// require('dotenv').config();
// const axios =require("axios");
// const Genre = require('../models/Genre');
// const Videogame = require('../models/Videogame');
// const {API_KEY}=process.env;
// const {Genre, Videogame} = require("../db");
// //const {getAllData} = require("./videogameController")


// const idGame=async(req, res, next)=>{
//     const id= req.params.id;
//     if(typeof id ===Number){
//     try {
//         const gameId= await axios.get(`https://api.rawg.io/api/games/{id}?key=1f144ad916834d1580997d3ba6108378`);
//         const gameData= await gameId.data;
//         if(gameData){
//             const {name, background_image, genres, description, realeased, rating, platforms}= gameData
//             const gameDetails={name, background_image, genres, description, realeased, rating, platforms}
//             return gameDetails;
//         }
//         }catch (err){
//            return next(err)
        
//         }
//     } else {
//         try {
//             if(typeof id ===String){
//                 const gameCreated= await Videogame.findbyPk({
                    
//                     include:{
//                         model: Genre,
//                         attributes:["id"],
//                         through:{
//                             attributes:[],
//                         }
                        
//                     }
//                 })
//                 return gameCreated
//             }
//         } catch (err) {
//             next(err)
//         }
       
//     }
// }
    
    
//     module.exports={
//         idGame
//     }
        
    