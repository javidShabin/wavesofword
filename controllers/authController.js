const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const login = async (req, res) => {
    const { email, password } = req.body;
  // find user user email
  const user = await User.findOne({ email: email });
  // if user is not found sent error
  if (!user) {
    return res.status(404).send("Unauthorised accsses!")
  }
  const passMatching = bcrypt.compareSync(password, user.password);
  if (passMatching) {
    const token = jwt.sign(
        {_id: user._id, email: user.email},
        process.env.TOKEN_SECRET_KEY
    )
    res.cookie("token",token, { httpOnly: true, secure: process.env.ENVIRONMENT === "development" ? false : true, maxAge: 1 * 60 * 60 * 1000 });

    res.send("Logged in");
  } else {
    res.status(401).send("Not user found");
  }

}
module.exports = login