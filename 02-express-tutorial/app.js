const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware function for logging
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
};

// Middleware for parsing request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Authentication middleware
app.use(cookieParser());
app.use('/api', logger);
app.use((req, res, next) => {
  const username = req.cookies.name;
  if (username) {
    req.user = username;
    next();
  } else {
    res.status(401).json({ success: false, message: 'Unauthorized' });
  }
});

app.get('/test', (req, res) => {
  res.status(200).json({ success: true, message: `Welcome, ${req.user}` });
});

app.post('/logon', (req, res) => {
  const name = req.body.name;
  if (name) {
    res.cookie('name', name);
    res.status(201).json({ success: true, message: `Hello, ${name}` });
  } else {
    res.status(400).json({ success: false, message: 'Please provide a name' });
  }
});

app.delete('/logoff', (req, res) => {
  res.clearCookie('name');
  res.status(200).json({ success: true, message: 'User logged off' });
});

// Include routes
const peopleRouter = require('./routes/people');
app.use('/api/v1/people', peopleRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});