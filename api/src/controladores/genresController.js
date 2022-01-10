// require('dotenv').config();
// const axios =require("axios");
// const { API_KEY } = process.env;
// const {Genre, Videogame} = require("../db");


// const getGenresApi =  async(req, res, next)=>{
//     try {
//         const genres= await axios.get(`https://api.rawg.io/api/genres?key=1f144ad916834d1580997d3ba6108378`);
//         const genresMaped= await genres.results.data?.map(elem=>{
//             console.log(genresMaped)
//             return {
//                 genres:elem.name,
//             }
//         })
//         genresMaped.forEach( (elem)=>{
//              Genre.findOrCreate({//lo está creando en la DB si no lo encuentra
//                 where:{
//                     name:elem //propiedad nombre que va a tener el elem
//                 }
//             })
//             return Genre.findAll({
//                 attributes:["name"]
//             })
//         })
        
//             return res.status(200).send(genresMaped)
//     } catch (error) {
//         return next ( error)
        
//     }

// }
// module.exports={
//     getGenresApi
// }



