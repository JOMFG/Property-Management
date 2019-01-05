import * as express from "express";
import * as propertyController from "./controller/property";
import bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post(
  "/property",
  propertyController.postPropertyValidator,
  propertyController.postProperty
);

app.put(
  "/property",
  propertyController.putPropertyValidator,
  propertyController.putProperty
);

app.get("/property/:propertyId", propertyController.getProperty);

export default app;
