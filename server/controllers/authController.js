const JWT_SECRET = process.env.JWT_SECRET;
const User = require('../models/authModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
  const { fName, lName, email, password, phoneNumber } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    // Set admin role if email matches
    const assignedRole = email === "sanjay46512002@gmail.com" ? "admin" : "user";

    const newUser = new User({
      fName,
      lName,
      email,
      password: hashedPassword,
      phoneNumber,
      role: assignedRole
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } 
  catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log("User found:", user);

    if (!user) return res.status(400).json({ error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

    // const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    console.log("JWT_SECRET value:", JWT_SECRET);

    res.json({
      token,
      user
    });
  } 
  catch (err) {
    console.error("Login error:", err); // Add this line
    res.status(500).json({ error: 'Server error' });
  }
};
