const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  await mongoose.connect("mongodb+srv://javidprsnlact:t41sHOj6MIhD7umG@cluster0.ujfj8le.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}
main().then(() => console.log("Connected")).catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`The server running in port: ${port}`);
});
