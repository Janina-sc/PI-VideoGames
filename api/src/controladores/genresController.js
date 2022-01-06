require('dotenv').config();
const axios =require("axios");
const { API_KEY } = process.env;
const {Genre, Videogame} = require("../db");


const getGenresApi =  async(req, res)=>{
    try {
        const genres= await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genresMaped= await genres.data.map(elem=>{
            return {
                genres:elem.results.name
            }
        })
        return genresMaped
    } catch (error) {
        return ("Genres not found", error)
        
    }

}
module.exports={
    getGenresApi
}



