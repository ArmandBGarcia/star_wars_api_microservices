const mongoose = require("mongoose");
const { mongoUrl } = require("../config/envs");

const conn = mongoose.createConnection(mongoUrl);

const Character = conn.model("Character", require("./schemas/characterSchema"));
const Film = conn.model("Film", require("./schemas/filmSchema"));
const Planet = conn.model("Planet", require("./schemas/planetSchema"));

// Character.find()
//   .populate("films", ["_id", "title"])
//   .populate("homeworld")
//   .then((res) => console.log(res[0]));

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema")),
  Planet: conn.model("Planet", require("./schemas/planetSchema")),
};
