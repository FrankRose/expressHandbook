const express = require('express');
const app = express();
const PORT = 3000;

const chalk = require('chalk');
const morgan = require('morgan');

app.use(morgan('dev'));
app.get('/', (req, res) => {
  try {
    console.dir(Object.entries(req.query));
    res.send('Hello World!!');
  } catch (error) {
    console.log(chalk`{red.underline error.message}`);
  }
});

app.listen(PORT, () =>
  console.log(chalk`{yellow.underline Express is listening on port ${PORT}...}`)
);
