const express = require("express");
const moviesRoutes = require("./routes/movies");
const app = express();
const cors = require('cors'); // Importe o pacote cors

app.use(cors());
app.use("/", moviesRoutes);

app.listen(3000, () => {
  console.log("Server started");
});
