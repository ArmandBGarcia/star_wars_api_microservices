const server = require("./src/server");

const PORT = 8003;

server.listen(PORT, () => {
  console.log(`Films listening on port: ${PORT}`);
});
