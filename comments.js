// Create web server
// Use express
// Create a new express app
const express = require('express');
const app = express();

// Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  console.log(comment);
  res.send(comment);
});

// Start the server
app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});
