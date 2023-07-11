const axios = require("axios");

module.exports = async (req, res) => {
  const response = await axios.get(`http://database:8004/Planet`);
  try {
    const planets = response.data;
    res.status(200).json(planets);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
