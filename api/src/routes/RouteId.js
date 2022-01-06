const express = require ("express");
const router = express.Router();
const {idGame} = require("../controladores/idGamesController.js")


router.get("/idVideogame", idGame)

module.exports= router;