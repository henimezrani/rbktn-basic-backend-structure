/* 

The backend has the following structure
Every request will follow the following path:
  Index.js -> Routes -> Controller -> Service -> Model
After the update on the mode is done, the controller will respond with res.send()

To add a new route, follow the following structure
app.use("api/[ENDPOINT]", NAME_OF_THE_ROUTE)

*/

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/user.route.js");

mongoose
  .connect("mongodb://localhost:27017/basic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("failed to connect to MongoDB", err);
  });
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

//list all of your routes here
app.use("/api/user", userRoute);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});
