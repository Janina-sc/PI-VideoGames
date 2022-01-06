require('dotenv').config();
const axios =require("axios");
const {API_KEY}=process.env;
const {Genre, Videogame} = require("../db");



const getApiData= async(req, res, next)=>{//el next que está en app.js para manejar errores, muestra el error pero continúa para que no se rompa la app
    
try{
    const videogamesApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`,{limit:100});
    
    const apiData= await videogamesApi.data.results?.map(elem=>{//ver modelos
        return {
            id:elem.id,
            image:elem.background_image.url,
            slug:elem.slug,
            name:elem.name,
            genres:elem?.map(elem=>{
                return {
                    name:elem.name
                }
            }),
            rating:elem.rating,
            released:elem.released,
            platforms:elem.platforms?.map(elem=>{
                return {
                    name:elem.platform.name
                }
                })

        }
    })
    return apiData;
}catch(error){
    next(error)
}
}
const getdDbData = async(req, res, next) => {
try {
    const gamesDb= await Videogame.findAll({
        include:{
            model:Genre
    }
    });
    const gamesDbMaped= gamesDb?.map(elem=>{
        return {
            id: elem.dataValues.id,
            image:elem.dataValues.background_image,
            name:elem.dataValues.name,
            genres:elem.dataValues.genres.map(elem=>elem.name),
            rating:elem.dataValues.rating,
            platforms:platforms.map(elem=>elem.name),
            createdInDb:elem.dataValues.createdInDb


        }
    });
    return gamesDbMaped
    
} catch (error) {
    next ( error)
    
}
}
const getAllData=async(req, res, next)=> {
    try{
    const apiDataMaped=await apiData();
    const dbDataMaped=await gamesDbMaped();
    if(!dbDataMaped){ //comprobación: sin no hay nada en DB
        res.send(apiDataMaped)
    } else {
    const allData= apiDataMaped.concat(dbDataMaped);
    return allData;
    }
    }catch(error){
        next (error)
    }

}

module.exports={
    getApiData,
    getdDbData,
    getAllData
}