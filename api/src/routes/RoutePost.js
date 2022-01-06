const express = require ("express");
const router = express.Router();
//const axios = require ("axios");
const createGame = require("../controladores/createGamesController.js");

router.post("/postVideogame", createGame )

module.exports= router;