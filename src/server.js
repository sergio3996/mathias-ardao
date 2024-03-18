import http from "http";
import app from "./app.js";

const server = http.createServer(app);
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Escuchando al PUERTO ${PORT}`);
});
