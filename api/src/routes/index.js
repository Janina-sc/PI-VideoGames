const { Router } = require('express');
require("dotenv").config()
//const videogames = require("./RouteVideogame.js");
//const genres = require("./RouteGenre.js");
const axios = require("axios");
const {API_KEY}=process.env;
const {Genre, Videogame} = require("../db");
// const idVideogame= require("./RouteId.js");
// const createGame = require("./RouteCreate.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//en la variable videogames tengo guardado el archivo RouteVideogame.js
const router = Router(); //inicializa el router, sirve para manejar las rutas, redirige a genres o vg , o a lo que corresponda

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiData=async()=>{


    const apiUrl1 = axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=1`);
    const apiUrl2 = axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=2`);
    const apiUrl3 = axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=3`);
    const apiUrl4 = axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=4`);
    const apiUrl5 = axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378&page=5`);

    const multiApi = [apiUrl1, apiUrl2, apiUrl3, apiUrl4, apiUrl5]
    const apiGames = [];

    await Promise.all(multiApi)
        .then(responses => {
            responses.forEach(responses => apiGames.push(
                responses.data.results?.map(game => {
                    const { name, background_image, genres, id, platforms, rating } = game;
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
    const apiG = await getApiData();
    const dbInfo = await getdbInfo();
    const allData = apiG.concat(dbInfo);
    return allData;
};
//         //apiInfo=[];
//     const videogamesApi = await axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378, {limit=100}`);
//     // videogamesApi.data.results.forEach(elem=>{
//     //     //console.log(videogamesApi)
//     //     apiInfo.push(elem)
//     // })
//    const apiDataMaped= await videogamesApi.data.results?.map(elem=>{
//     return {
//         name:elem.name,
//         image:elem.background_image,
//         genres:elem.genres?.map(genre=>genre.name),
//         platforms:elem.platforms.map(platform=>platform.name),
//         rating:elem.rating,
//         id:elem.id
//         }
//     })     
//     return apiDataMaped;
// };    
    
    
    
//     const getdDbData = async()=>{
//         return await Videogame.findAll({
//             include:{
//                 model: Genre,
//                 attributes:["name"],
//                 through:{//es una comprobación que se hace cuando se traen los atributos
//                attributes:[],
//             }
//         }
//     })
// }

// const getAllData = async()=>{
//     const apiData = await getApiData();
//     const dbData = await getdDbData();
//     if(!dbData){ //comprobación: sin no hay nada en DB
//         res.send(apiDataMaped)
//     } else {
//     const allData= apiData.concat(dbData);
//     return allData;
//     }
// }




  router.get("/videogames", async (req, res, next) =>{
    const name = req.query.name;//el query se pasa por url ?name=xxx
    try{
    const allGames=  await getAllGames();
    if(name){
        const game=  allGames.filter(elem=>{
            elem.name.toLowerCase().includes(name.toLowerCase())
        })
    
        game.length?
        res.status(200).send(game):
        res.status(404).send("Game not found")
        } else{
          
            res.status(200).send(allGames)
        }
    }catch(error){
        return next(error)
    }
    });








    





module.exports= router;



