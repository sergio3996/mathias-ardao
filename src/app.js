import express from "express";
import { __dirname } from "./utils.js";
import apiEmailRouter from "./routes/api/email.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.use("/api/email", apiEmailRouter);

export default app;
