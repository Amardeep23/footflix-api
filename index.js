const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require('./routes/Users')
const movieRoute = require('./routes/Movies');
const listRoute = require('./routes/Lists')

dotenv.config();
var cors = require('cors');
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("ConneTED to Db SUCCESSFUl");
  })
  .catch((err) => {
    console.log(err);
  });

//to accept json file as body
app.use(express.json())


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8000, () => {
  console.log("Backend SErvEr is RuNning");
});
