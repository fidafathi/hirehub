const User = require("../models/User");

const registerUser = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    if (
      email === "admin@hirehub.com" &&
      password === "admin123"
    ) {
      return res.json({
        role: "recruiter",
        message: "Recruiter Login",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }

    res.json({
      message: "Login Success",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  registerUser,
  loginUser,
};