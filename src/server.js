const express = require('express');

// create the app
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// changed port to 8080
app.listen(8080);
