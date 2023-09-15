const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Secret key for JWT
const secretKey = 'dkndnsjdnjsan';

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    console.log({username, password,user})
    console.log(bcrypt.compareSync(password, user.password))

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate and send JWT token
    const token = jwt.sign({ id: user.id, username: user.username, isAdmin: user.isAdmin }, secretKey, {
      expiresIn: '1h', // Token expiration time
    });

    res.json({ message: "success", data: {
      user,
      token
    }});
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
