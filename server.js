const express = require("express");
const moviesRoutes = require("./routes/movies");
const app = express();

app.use("/", moviesRoutes);

app.listen(3000, () => {
  console.log("Server started");
});
