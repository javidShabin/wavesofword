const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const port = 5000;

app.use(cors())
app.use(express.json())

// Connect Database
async function main() {
  await mongoose.connect("mongodb+srv://javidprsnlact:t41sHOj6MIhD7umG@cluster0.ujfj8le.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}
main().then(() => console.log("Connected")).catch((err) => console.log(err));

// Create server
app.listen(port, () => {
  console.log(`The server running in port: ${port}`);
});
