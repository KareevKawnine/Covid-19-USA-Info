const express = require('express');
const app = express();
const path = require('path');
const covidData = require('./covid.json');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

//Home Page
app.get('/', (req, res) => {
    res.render('home', {
        covidData
    });


})

app.listen(1900, () => {
    console.log("LISTENING ON PORT 1900")
});