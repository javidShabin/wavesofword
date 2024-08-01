require('dotenv').config()
const express = require("express");
const app = express();
const bookRoute = require('./routes/booksRoute')
const autherRoute = require('./routes/autherRoute')
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')
const mongoose = require("mongoose");
const cors = require('cors')
const port = 5000;

// Middle wares
app.use(cors())
app.use(express.json())

app.use('/books', bookRoute)
app.use('/authers', autherRoute)
app.use('/useres', userRoute)
app.use('/auth', authRoute)

// Connect Database
async function main() {
  await mongoose.connect("mongodb+srv://javidprsnlact:t41sHOj6MIhD7umG@cluster0.ujfj8le.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}
main().then(() => console.log("Connected")).catch((err) => console.log(err));

// Create server
app.listen(port, () => {
  console.log(`The server running in port: ${port}`);
});
