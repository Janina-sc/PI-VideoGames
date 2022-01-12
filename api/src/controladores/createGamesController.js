// require('dotenv').config();
// const axios =require("axios");
// const {API_KEY}=process.env;
// const {Genre, Videogame} = require("../db");


// router.post("/videogame", async(req, res, next)=>{
   
//    const  { name, description, released, rating, genre, platforms, createdInDb} = req.body;
        
             
//             try {
//                 const gameCreated= await Videogame.create({
//                     name, description, released, rating, platforms, createdInDb
//                 })

//                  const genresDb= await Genre.findAll({ //la busca en el modelo Genre
//                      where:{
//                          name: genre
//                      }
//                  })
//                  gameCreated.addGenre(genresDb)
//                  res.send("Videogame successfully created")
        
//     } catch (err) {
//         return next ( err)
//     }
// }) 
    


// //Promesas
// // const createGame= (req, res, next)=>{ no se necesita el async
   
   
// //     const  newGame = req.body;
    
// //          if(newGame){ // validar ésto de alguna forma
// //         try {
// //              Videogame.create(newGame).then(response=>res.send(response)) 
    
// // } catch (err) {
// //     next ( err)
// // }
// // }   
// // else{
// //     res.send("Sin datos suficientes")
// // }
// // }

// module.exports={
//     createGame
// })