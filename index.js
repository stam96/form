const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const database = require("./config/dbmongo");
const noEncontrado = require("./middleware/error");
const app = express();
//Inicializar Db
database();

//Variables de entorno
require("dotenv").config({ path: ".env" });

//habilitar middlewares
app.use(cors());
app.use(morgan("tiny"));

//habilitar json para visualizar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(__dirname + "/public"));

//rutas
app.use("/api", require("./routes"));
app.use(noEncontrado);

//Conexion
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 6000;

//Escuchar puerto
app.listen(port, host, () => {
  console.log(`escuchando desde el puerto ${port}`);
});
