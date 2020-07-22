const path = require("path");
const express = require("express");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
//serve static files using express
// app.use(express.static('static', options))
app.use('/static', express.static('static'))
app.use(express.urlencoded()) //encoding the form data so that it's not visible on the URL

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')   //set the templete/views engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views/template directory(by default its view folder to root directory)

//ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('index.pug', params);
});



//START THE SERVER
app.listen(port, () => {
    console.log(`the application started started successfully on port ${port}`);
});
