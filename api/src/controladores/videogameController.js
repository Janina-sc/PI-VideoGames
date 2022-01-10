// require('dotenv').config();
// const axios =require("axios");
// const {API_KEY}=process.env;
// const {Genre, Videogame} = require("../db");




// const getApiData=async()=>{
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

// const getApiData= async(req, res, next)=>{//el next que está en app.js para manejar errores, muestra el error pero continúa para que no se rompa la app
  
// try{
//     // const videogamesFromApi=[];
//     // for (let i=0; i <5; i++){
//     const videogamesApi1 = await axios.get(`https://api.rawg.io/api/games?key=9ca125dbb0f746c9848e190b9a9e5d5f`, {limit:100});
    
    
//     const apiData= await videogamesApi.data.results?.map(elem=>{//ver modelos
//         return {
//             id:elem.id,
//             image:elem.background_image.url,
//             description:elem.description,
//             name:elem.name,
//             genres:elem?.map(elem=>{
//                 return {
//                     name:elem.name
//                 }
//             }),
//             rating:elem.rating,
//             released:elem.released,
//             platforms:elem.platforms?.map(elem=>{
//                 return {
//                     name:elem.platform.name
//                 }
//                 })

//         }
//     })
//     return apiData;
// }catch(error){
//     next(error)
// }
// }
// const getdDbData = async(req, res, next) => {
// try {
//     return await Videogame.findAll({
//         include:{
//             model:Genre,//sin esto no me trae los genres cuando esté creando un v.g.
//             attributes:["name"],
//             through:{//es una comprobación que se hace cuando se traen los atributos
//                 attributes:[],
//             },
//     }
//     });
//     } catch (error) {
//     next ( error)
//     }
// }
// const getAllData=async(req, res, next)=> {
//     try{
//     const apiData=await getApiData();
//     const dbData=await getdDbData();
//     if(!dbData){ //comprobación: sin no hay nada en DB
//         res.send(apiDataMaped)
//     } else {
//     const allData= apiData.concat(dbData);
//     return allData;
//     }
//     }catch(error){
//         next (error)
//     }
    //}

// module.exports={
//     getApiData,
//     getdDbData,
//     getAllData
// }