const axios = require("axios");

module.exports = async (req, res) => {
  const response = await axios.get(`http://database:8004/Film`);
  try {
    const films = response.data;
    res.status(200).json(films);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
