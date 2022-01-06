const { Router } = require('express');
const videogames = require("./RouteVideogame.js");
const genres = require("./RouteGenre.js");
const idVideogame= require("./RouteId.js");
const createGame = require("./RoutePost");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//en la variable videogames tengo guardado el archivo RouteVideogame.js
const router = Router(); //inicializa el router, sirve para manejar las rutas, redirige a genres o vg , o a lo que corresponda

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogames);//redirige a RouteVideogame.js
router.use("/genres", genres);
router.use("/idVideogame", idVideogame);
router.use("/createGame", createGame);


module.exports = router;
