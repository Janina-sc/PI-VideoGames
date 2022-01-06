require('dotenv').config();
const axios =require("axios");
const {API_KEY}=process.env;
const {Genre, Videogame} = require("../db");


const createGame= async(req, res, next)=>{
   
   
        const  { name, slug, released, rating, genres, platforms, createdInDb} = req.body;
        
            // if(createdGame){ validar ésto de alguna forma
            try {
                 //Videogame.create().then(response=>res.send(response)) con Promesas
        return createGame
    } catch (error) {
        next ( error)
    }
}   
    // else{
    //     res.send("Sin datos suficientes")
    // }
//}

//Promesas
// const createGame= (req, res, next)=>{ no se necesita el async
   
   
//     const  newGame = req.body;
    
//          if(newGame){ // validar ésto de alguna forma
//         try {
//              Videogame.create(newGame).then(response=>res.send(response)) 
    
// } catch (error) {
//     next ( error)
// }
// }   
// else{
//     res.send("Sin datos suficientes")
// }
// }

module.exports={
    createGame
}