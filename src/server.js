import http from "http";
import app from "./app.js";
import config from "./config/config.js";

const server = http.createServer(app);
const PORT = config.port || 3000;

server.listen(PORT, () => {
  console.log(`Escuchando al PUERTO ${PORT}`);
});
