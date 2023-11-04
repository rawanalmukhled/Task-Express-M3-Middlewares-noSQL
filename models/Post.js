const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  image: String,
});

module.exports = model("Post", PostSchema);
