const mongoose = require("mongoose");
const schema = mongoose.Schema;

const formularioSchema = new schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    descripcion: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const modelFormulario = mongoose.model("Formularios", formularioSchema);
module.exports = modelFormulario;
