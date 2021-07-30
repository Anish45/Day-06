const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require('cors');
app.use(express.json());

const url =
  "mongodb+srv://anish:anish123@cluster0.x250z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const postsRoute = require("./routes/posts");
app.use(cors());
app.use("/post", postsRoute);


app.get("/", (req, res) => {
  res.json("we are on home");
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to DB!")
);

app.listen(5000);
