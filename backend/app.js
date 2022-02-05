const express = require("express");
const urlRouter = require("./routes/UrlRouter");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", urlRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
