const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

mongoose.connect('mongodb://localhost:27017/usersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User model schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

// Login route
app.post('/login', function (req, res) {
  const { username, password } = req.body;

  // Implement your logic to check credentials
  // For simplicity, let's assume the user is authenticated if the username and password match
  // Replace this with your actual authentication logic

  if (username === 'demo' && password === 'password') {
    req.session.user = { username: 'demo' };
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Contact form route
app.post('/contact', function (req, res) {
  const { name, email, message } = req.body;

  // Handle form submission and save data to the database if needed
  // For simplicity, let's assume the form data is saved to a MongoDB collection
  // Replace this with your actual code to save data to the database

  // Assuming you have a Contact model
  const Contact = mongoose.model('Contact', {
    name: String,
    email: String,
    message: String,
  });

  const newContact = new Contact({
    name: name,
    email: email,
    message: message,
  });

  newContact.save(function (err) {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(3000, function () {
  console.log('Server started on port 3000');
});
