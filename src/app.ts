import * as express from "express";
import * as propertyController from "./controller/property";
import bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post(
  "/property",
  propertyController.propertyValidator,
  propertyController.postProperty
);

export default app;
