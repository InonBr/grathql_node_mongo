const express = require('express');
const app = express();
const connectDB = require('./db/db');
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB().then(() => {
  console.log('🔵 MongoDB connected...');
  app.listen(port, () => {
    console.log(`🟢 App listening at http://localhost:${port}`);
  });
});
