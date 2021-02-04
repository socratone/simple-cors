const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
  origin: ['http://127.0.0.1:5500'], // preflight시 해당 경로만 허가한다. 
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.delete('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`App listening at http://localhost:3000`);
});