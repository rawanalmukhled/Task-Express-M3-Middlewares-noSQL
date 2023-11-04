const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
connectDb();
app.use(express.json());
app.use(cors());
app.use("/posts", postsRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));

app.use((req, res, next) => {
  res.status(404).json({ msg: "path not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({ msg: err.message || "INTERNAL SERVER ERROR" });
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
