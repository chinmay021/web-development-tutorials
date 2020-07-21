const express = require('express')

const app = express();
const port = 80;
app.use('/static', express.static('static'))
//app.use('url name'),express.static('folder name')

app.get('/', (req, res) => {
    res.status(200).send("this is the homepage of my first express app ");
});

app.get('/about', (req, res) => {
    res.send("this is the about page of my first express app ");
});
app.post('/about', (req, res) => {
    res.send("this is a post req for the  about page of my first express app ");
});
app.get('/this', (req, res) => {
    res.status(404).send("page not found ");
});

app.listen(port, () => {
    console.log(`the application started started successfully on port${port}`);
});
