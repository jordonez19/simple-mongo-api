import jd from "../package.json";
import router from "./routes/router";
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.set("jd", jd);
app.get("/", (req, res) => {
  res.json({
    name: app.get("jd").name,
    author: app.get("jd").author,
    version: app.get("jd").version,
    description: app.get("jd").description,
  });
});

router(app);


export default app;
