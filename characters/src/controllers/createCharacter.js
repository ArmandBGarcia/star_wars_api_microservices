const Character = require("../data");
const { reponse } = require("../utils");

module.exports = async (req, res) => {
  throw Error("hubo un error");
  const newCharacter = await Character.create();
  Response(res, 201, newCharacter);
};
