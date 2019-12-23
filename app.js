const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Candidates = require('./app/routes/Candidates.js');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.use('/Candidates', Candidates);
module.exports = app;