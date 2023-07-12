const axios = require("axios");

module.exports = async (req, res) => {
  const response = await axios.get(`http://database:8004/Character`);
  console.log(response);
  try {
    const character = response.data;
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
