const { validationResult } = require("express-validator");
const modelFormulario = require("../schema/formulario");
const crearForm = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body;
    const crear = await modelFormulario.create(body);
    console.log(crear);
    res.json(crear);
  } catch (error) {
    res.json(error);
  }
};
const visualizar = async (req, res) => {
  try {
    const verform = await modelFormulario.find();
    res.json(verform);
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  crearForm,
  visualizar,
};
