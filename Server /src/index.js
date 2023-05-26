const { server } = require("./App");
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server raisen in port ${PORT}`);
});
