const jwt = require("jsonwebtoken")
const User = require("../../../models/User")
const bcrypt = require("bcryptjs")

exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    })

    res.status(200).json({ message: "Login successful", token })
  } catch (error) {
    res.status(500).json(error.message)
  }
}
