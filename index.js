const colors = require("colors")
const paredes = require("./src/paredes");
const puerta = require("./src/puerta");
const techo = require("./src/techo");
const habitaciones = require("./src/habitaciones");
const ventanas = require("./src/ventanas");


console.log("PROYECTO INICIADO..".red);
paredes();
puerta();
techo();
habitaciones();
ventanas();
