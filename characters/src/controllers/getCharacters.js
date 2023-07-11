// const Character = require("../data");
const axios = require("axios");
// const { response } = require("../utils");

module.exports = async (req, res) => {
  // const { model } = req.params;
  // console.log({ model });
  const characters = await axios.get(`http://localhost:8004/Character`);
  // // response(res, 200, characters);
  // console.log(characters);
  // try {
  //   res.status(200).json(characters);
  // } catch (error) {
  //   res.status(400).json({ error: error });
  // }
  res.json(characters.data);
};
