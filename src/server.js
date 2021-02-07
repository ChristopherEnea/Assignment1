const express = require('express');

// create the app
const app = express();

// unused variable
const trip_linter = 0;

app.get('/', (req, res) => {
  res.send('Hello World');
});

// changed port to 8080
app.listen(8080);
