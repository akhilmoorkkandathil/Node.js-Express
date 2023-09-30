const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    // Implement your login logic here
    const username = req.body.username;
    // Check if username and password are valid, then redirect to home page
    res.redirect(`/home?username=${username}`);
});

app.get('/home', (req, res) => {
    const username = req.query.username;
    res.render('home', { username });
});

app.get('/logout', (req, res) => {
    // Implement your logout logic here
    // Redirect to login page after logout
    res.redirect('/login');
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
