const express = require ("express");
const router = express.Router();
require("dotenv").config();

const {getApiData, getdDbData,getAllData} = require("../controladores/videogameController.js");


//acá manejo todas las request que lleguen a "/videogames"
router.get("/videogames",  getApiData);
router.get("./videogames", getdDbData );
router.get("./videogames", getAllData);


module.exports= router;