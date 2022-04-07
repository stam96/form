const { body, check } = require("express-validator");
const modelFormulario = require("../schema/formulario");

const validarForm = [
  check("name", "ingresar campo nombre")
    .not()
    .isEmpty()
    .trim()
    .isLength({ min: 1 })
    .withMessage("No debe existir campo vacio")
    .exists()
    .escape(),
  body("email", "debe ser un email valido")
    .trim()
    .exists()
    .isEmail()
    .normalizeEmail()
    /*.custom(async (email) => {
      const verificar = await modelFormulario.findOne({ email });
      if (verificar) {
        throw new Error("Email existente");
      }
      return verificar;
    })*/
    .escape(),
  body("descripcion", "ingresar campo descripcion")
    .not()
    .isEmpty()
    .trim()
    .isLength({ min: 1 })
    .withMessage("No debe existir campo vacio")
    .exists()
    .escape(),
];

module.exports = { validarForm };
