// JavaScript source code
// require express for the web-server
const express = require('express');

// require handlebars for use with express
const hbs = require('hbs');

// start the express app
var app = express();

// register partials for hbs and set the path
hbs.registerPartials(__dirname + '/views/partials');

// register helper function for get current year
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

// register helper function to convert text to all uppercase
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

// set the express view engine to be hbs
app.set('view engine', 'hbs');

//point to the directory for static html
app.use(express.static(__dirname));

// register handler for root - set up the get request response - '/' root route with request and response
app.get('/', (req, res) => {
    //res.send('<h1>Hello Thames Valley not Silicon Valley</h1>');
    //render the home page via handlebar
    res.render('home.hbs', {
        pageTitle: 'HOME Page for Thames Valley not Silicon Valley',
        welcomeMessage: 'Welcome to the Home page for Thames Valley not Silicon Valley'
    });
});

// register handler - set up an about page - root/about
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page for Thames Valley not Silicon Valley'
    });
});

// register handler - set up a bad page - root/bad - send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'This is the bad error message for Thames Valley not Silicon Valley'
    });
});


// set up listener on port from environment or 3000
var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is up on port: ' + port);
});