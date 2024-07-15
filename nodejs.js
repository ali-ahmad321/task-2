npm install express mongoose ejs

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Define routes like GET, POST, PUT, DELETE
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    res.render('index', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


