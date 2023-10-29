const express = require("express");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");

connectDb();
app.use(express.json());

app.use("/posts", postsRoutes);

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
