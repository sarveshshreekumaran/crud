require("dotenv").config();

//MongoDB Connection
const connectDB = require("./config/connectDB");

connectDB().catch((error) => {
  console.log(error);
});

//Express app
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//Middlewares
const cors = require("cors");
const requestMiddleware = require("./middlewares/requestMiddleware");

//Routes
const itemRoute = require("./routes/itemRoute");

//Request middleware
app.use(requestMiddleware);

//In-Build middlewares for parsing json and urlencoded payloads.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS Middleware enable cors
app.use(cors());

app.use("/", itemRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
