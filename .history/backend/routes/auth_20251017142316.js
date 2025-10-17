// Signup
router.post('/signup', async (req, res) => {
  console.log("Signup request body:", req.body); // log incoming data
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username }],
    });
    if (existingUser)
      return res.status(400).json({ message: 'Username or Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User created:", newUser); // log success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("Signup error:", err); // log exact error
    res.status(500).json({ message: 'Server error' });
  }
});
