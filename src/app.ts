import express from "express";
import bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

export default app;
