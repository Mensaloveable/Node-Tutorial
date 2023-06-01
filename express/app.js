const express = require('express');
const path = require('path');

const app = express();

// Set the static folder
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: path.join(__dirname, '../views') });
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.status(404).sendFile('404.html', { root: path.join(__dirname, '../views') });
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
