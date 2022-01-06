require('dotenv').config();
const axios =require("axios");
const {API_KEY}=process.env;
const {Genre, Videogame} = require("../db");


const idGame=async(req, res)=>{
    // try {
    //     const getGameId=await axios.get(`https://api.rawg.io/api/games/{id}?key={API_KEY}`, {limit:100})
    //         return idGame.data
    //     }catch(error){
    //         console.log(error)
    //     }
    }
    
    module.exports={
        idGame
    }
        
    