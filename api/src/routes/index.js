require("dotenv").config()
const { Router } = require('express');
//const videogames = require("./RouteVideogame.js");
//const genres = require("./RouteGenre.js");
const axios = require("axios");
const {API_KEY} = process.env;
const {Genre, Videogame, video_genre} = require("../db");



// const idVideogame= require("./RouteId.js");
// const createGame = require("./RouteCreate.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//en la variable videogames tengo guardado el archivo RouteVideogame.js
const router = Router(); //inicializa el router, sirve para manejar las rutas, redirige a genres o vg , o a lo que corresponda

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//console.log(API_KEY)
const getApiData=async()=>{
    const apiUrl1 = await axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=1`);
    const apiUrl2 = await axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=2`);
    const apiUrl3 = await axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=3`);
    const apiUrl4 = await axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=4`);
    const apiUrl5 = await axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=5`);

    const multiApi = [apiUrl1, apiUrl2, apiUrl3, apiUrl4, apiUrl5]
    const apiGames = [];

    await Promise.all(multiApi)
    .then(responses => {
        responses.forEach(responses => apiGames.push(
            responses.data.results?.map(game => {
                const { name, background_image, platforms, genres, rating, id } = game;
                return {
                    name,
                    background_image,
                    platforms: platforms.map(game => game.platform.name),
                    genres: genres.map(game => game.name),
                    rating,
                    id,
                }
            })

        ))
    })

return apiGames.flat();

};
const getdbInfo = async () => {
  return await Videogame.findAll({
                  include:{
                      model: Genre,
                      attributes:["name"],
                      through:{//es una comprobación que se hace cuando se traen los atributos
                     attributes:[],
                  }
              }
          })
      }

  

const getAllGames = async () => {
  const apiGames = await getApiData();
  const dbInfo = await getdbInfo();
  const allData = apiGames.concat(dbInfo);
  return allData;
};         

router.get("/videogames", async (req, res, next) =>{

  const { name } = req.query; 
  try {
  let allGames = await getAllGames();
  if (name) {
    let dataGame = allGames.filter((elem) => 
      elem.name.toLowerCase().includes(name.toLowerCase()));
    if (dataGame.length >= 1) return res.status(200).send(dataGame.slice(0,16)) 
    res.status(404).send("Game not found")
  } else {
    res.status(200).send(allGames)
    // let allGames2 = await getAllGames()
    // res.status(200).json(allGames2)
  }
  } catch (err) {
    return next(err); 
  }
  });




  router.get("/videogame/:id", async(req, res, next)=>{
  
          const id= req.params.id;
          if (typeof id !== "string") id.toString();

          try {
            if (id.includes("-")) {
              const gamesDb = await Videogame.findOne({
                where: { id: id },
                include: {
                  model: Genre,
                  attributes:["name"],
                  through:{
                    attributes:[],
                  }
                },
              });
        
              return res.json(gamesDb);
        
            } else {
              const getGamesApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=1f144ad916834d1580997d3ba6108378`);
              const apiGames = await getGamesApi.data
              if (apiGames.name) {
                const { name, background_image, genres, description, released, rating, platforms, id } = apiGames
                const gameDetails = {
                  name,
                  description:description.replace( /(<([^>]+)>)/ig, ''),
                  released,
                  background_image,
                  rating,
                  platforms:platforms.map(elem=>elem.platform.name).join(","),
                  genres:genres.map(elem=>elem.name).join(","),
                  id
                }
                res.status(200).json(gameDetails);
              }
            }
          } catch (err) {
            res.status(404).json("Game ID not found");
          }
        });


// const getdbInfo = async () => {
//   const gamesDb= await Videogame.findAll({
//                   include:{
//                       model: Genre,
//                       attributes:["name"],
//                       through:{//es una comprobación que se hace cuando se traen los atributos
//                      attributes:[],
//                   }
//               }
//           })
//           if(gamesDb){
//             const gamesDbMaped= gamesDb.map(elem=>{
//               return {
//                    name:elem.name,
//                     background_image:elem.background_image,
//                     platforms: elem.platforms,
//                     genres: elem.genres.map(elem => elem.name),
//                     rating:elem.rating,
//                     id:elem.id,
//               }
//             })
//             return gamesDbMaped
//           }
//       }


    

// const getAllGames = async () => {
//     const apiGames = await getApiData();
//     const dbInfo = await getdbInfo();
//     const allData = apiGames.concat(dbInfo);
//     return allData;
// };         

// router.get("/videogames", async (req, res, next) =>{

//     const { name } = req.query; 
//     try {
//     let allGames = await getAllGames();
//     if (name) {
//       let dataGame = allGames.filter((elem) => 
//         elem.name.toLowerCase().includes(name.toLowerCase()));
//       if (dataGame.length >= 1) return res.status(200).send(dataGame.slice(0,16)) 
//       res.status(404).send("Game not found")
//     } else {
//       res.status(200).send(allGames)
//       // let allGames2 = await getAllGames()
//       // res.status(200).json(allGames2)
//     }
//     } catch (err) {
//       return next(err); 
//     }
//     });


  

//     router.get("/videogame/:id", async(req, res, next)=>{
    
//             const id= req.params.id;
//             if (typeof id !== "string") id.toString();

//             try {
//               if (id.includes("-")) {
//                 const gamesDb = await Videogame.findOne({
//                   where: { id: id },
//                   include: {
//                     model: Genre,
//                     attributes:["name"],
//                     through:{
//                       attributes:[],
//                     }
//                   },
//                 });
          
//                 return res.json(gamesDb);
          
//               } else {
//                 const getGamesApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=1f144ad916834d1580997d3ba6108378`);
//                 const apiGames = await getGamesApi.data
//                 if (apiGames.name) {
//                   const { name, background_image, genres, description, released, rating, platforms } = apiGames
//                   const gameDetails = {
//                     name,
//                     description:description.replace( /(<([^>]+)>)/ig, ''),
//                     released,
//                     background_image,
//                     rating,
//                     platforms:platforms.map(elem=>elem.platform.name).join(", "),
//                     genres:genres.map(elem=>elem.name).join(", "),
//                   }
//                   res.status(200).json(gameDetails);
//                 }
//                 else{
//                   const gamesDetailDb= gamesDetailDb.map(elem=>{
//                     return {
//                       name:elem.name,
//                       description:elem.description,
//                       released:elem.released,
//                       background_image:elem.background_image,
//                       rating:elem.rating,
//                       platforms:elem.platforms,
//                       genres:elem.genres.map(elem => elem.name)
//                     }
//                   })

//                 } return gamesDetailDb;
//               }
//             } catch (err) {
//               res.status(404).json("Game ID not found");
//             }
//           });
          




            
        

            router.get("/genres", (req, res, next)=>{
              
              try {
                  axios.get(` https://api.rawg.io/api/genres?key=1f144ad916834d1580997d3ba6108378`)
                    .then((response) => {
              
                      const genre = response.data;
                     
                      //console.log(genre)
                      const genres = genre.results?.map(elem => elem.name);
                      console.log(genres)
                      genres.forEach( elem => {
                         Genre.findOrCreate({
                          where: {
                            name:elem,
                          
                          }
                      
                         })
                        return Genre.findAll({
                            attributes:["name"]
                        });
                      })
                      return res.status(200).send(genres)
              
                    })
                } catch (err) {
                  return next(err)
                }
              })
    

        router.post("/videogame", async(req, res, next)=>{
         try {
        const  {  name, background_image,description, released, rating, genres, platforms,  createdInDb} = req.body;
        // console.log(name, "name")
        // console.log(description, "description")
        // console.log(released,"released")
        // console.log(rating)
        // console.log(genres, "genero")
        // console.log(platforms)
        // console.log(createdInDb)
        const gameCreated= await Videogame.create({
        name,
        background_image,
        description, 
        released, 
        rating,
        platforms, 
        createdInDb,
        })
         console.log(gameCreated)
        const genresDb= await Genre.findAll({ //la busca en el modelo Genre
        where:{
            name:genres
             }
        })
        genresDb && gameCreated.addGenre(genresDb)
        return res.send("Game successfully created")
                 
       } catch (err) {
        res.status(400).json(err)
             }
         }) 
        
             
         
         
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

         

        
    

    


    


  module.exports= router;



  