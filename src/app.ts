import * as express from "express";
import * as loginController from "./controller/login";
import bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello Ryan & Joe!"));
app.post("/login", loginController.login);

export default app;
