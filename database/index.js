const server = require("./src/server");
const { Character } = require("./src/database");

const PORT = 8004;

// Character.list().then((res) => console.log(res[0]));
// Character.get(2).then((res) => console.log(res));
// Character.insert({
//   _id: "200",
//   name: "Armando",
//   birth_year: "1993",
// }).then((res) => console.log(res));

server.listen(PORT, console.log("Server listening on port: " + PORT));
