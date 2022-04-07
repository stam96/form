const express = require("express");
const { crearForm, visualizar } = require("../controller/jform");
const { validarForm } = require("../validator/jform");
const router = express.Router();

router.post("/", validarForm, crearForm);
router.get("/", visualizar);
module.exports = router;
