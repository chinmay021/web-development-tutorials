const express = require('express')
const path = require('path');
const fs = require('fs')
const { fstat } = require('fs');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))    //app.use('url name'),express.static('folder name') ->used to serving static files or adding static files to express app

app.use(express.urlencoded()) //encoding the data send using post i.e not visible on the url


//PUG SPECIFIC STUFF
app.set('view engine', 'pug')   //set the templete/views engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views/template directory(by default its view folder to root directory)



//END POINTS
app.get('/', (req, res) => {
    const con = ' This the best content on the internet';
    const params = { title: 'CSGO is the best game', content: con };
    res.status(200).render('index.pug', params);
});
app.post('/', (req, res) => {
    //variable name is passed through name attribute in the form in html ex name, address
    form = req.body;
    console.log(form.name);
    let outputToWrite = `The name of the client is ${form.name}, ${form.age} years old, ${form.gender}, residing at ${form.address}.`
    fs.writeFileSync('output.txt', outputToWrite);


    const params = { message: 'Your form has been submitted successfully' };
    res.status(200).render('index.pug', params);
});



// //our pug demo endpoint
// app.get('/demo', function (req, res) {
//     res.status(200).render('demo', { title: 'Hey chinmay', message: 'Hello there! and thanks for tellling me how to use pug!' })
// })

// app.get('/', (req, res) => {
//     res.status(200).send("this is the homepage of my first express app ");
// });

// app.get('/about', (req, res) => {
//     res.send("this is the about page of my first express app ");
// });
// app.post('/about', (req, res) => {
//     res.send("this is a post req for the  about page of my first express app ");
// });
// app.get('/this', (req, res) => {
//     res.status(404).send("page not found ");
// });


//START THE SERVER
app.listen(port, () => {
    console.log(`the application started started successfully on port${port}`);
});
