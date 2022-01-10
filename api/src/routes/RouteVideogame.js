// const express = require ("express");
// const {Router} = require ("express");
// const router = express.Router();
// require("dotenv").config();
// const {getApiData, getdDbData,getAllData} = require("../controladores/videogameController.js");
// const axios = require("axios");

// const router = Router();
// //acá manejo todas las request que lleguen a "/videogames"
// router.get("/videogames",  getApiData);
// router.get("/videogames", getdDbData );
// router.get("/videogames", async(req, res,next)=>{
//     const getApiData=async()=>{
//     apiInfo=[];
//     const videogamesApi = await axios.get(`https://api.rawg.io/api/games?key=1f144ad916834d1580997d3ba6108378, {limit=100}`);
//     videogamesApi.data.results.forEach(elem=>{
//         apiInfo.push(elem)
//     })
//    const apiDataMaped= await apiInfo?.map(elem=>{
//     return {
//         name:elem.name,
//         image:elem.background_image,
//        genres:elem.genres.map(genre=>genre.name),
//         // platforms:elem.platforms.map(platform=>platform.name),
//         // rating:elem.rating,
//         id:elem.id
        
//     }

//    })         
//     return apiDataMaped;
// }

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
//     const apiData=await getApiData();
//     const dbData=await getdDbData();
//     if(!dbData){ //comprobación: sin no hay nada en DB
//         res.send(apiDataMaped)
//     } else {
//     const allData= apiData.concat(dbData);
//     return allData;
// }
// }

// //-----------------------//

// try {
//     const name = req.query.name;//el query se pasa por url ?name=xxx
// const allGames=   getAllData();
// if(name){
//     const game=  allGames.filter(elem=>{
//         elem.name.toLowerCase().includes(name.toLowerCase())
//     })

//     game.length?
//     res.status(200).send(game):
//     res.status(404).send("Game not found")
//     } else{
//         res.status(200).send(allGames)
//     }

// }catch(error){
//     console.log(error)
// }
// })



// module.exports= router;