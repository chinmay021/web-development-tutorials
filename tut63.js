// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Before and after pseudo selector</title>
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap" rel="stylesheet">
        <style>
            body {
                margin: 0px;
                padding: 0px;
                background-color: black;
                color: white;
            }
              header::before{
                content: "";
                background: url('https://source.unsplash.com/collection/190727/1600x900') no-repeat center center/cover;
                position: absolute;
                top: 0px;
                left: 0px; 
                width: 100%;
                height: 100%;
                z-index:-1;
                opacity: .3;
    
            }  
    
            .navigation {
                font-family: 'Lexend Tera', sans-serif;
                font-size: 20px;
                display:flex;
                
            }
    
            li {
                list-style: none;
                padding: 18px 20px;
            }
            #contact{
                margin-left: auto;
    
            }
    
            section {
                font-family: 'Lexend Tera', sans-serif;
                height: 500px;
                margin: 3px 23px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
    
            h1 {
                font-size: 4rem;
            }
    
            P {
                text-align: center;
            }
               /* section::after{
            content:"this is a content"
        } */
        </style>
    </head>
    
    <body>
        <header>
            <nav class="navbar">
                <ul class="navigation">
                    <li class="item">Home</li>
                    <li class="item">About</li>
                    <li class="item">Services</li>
                    <li id="contact"class="item">Contact us</li>
                </ul>
            </nav>
        </header>
        <Section>
            <h1>Welcome to Coding World</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique fugit veritatis laboriosam soluta
                impedit unde qui cum sapiente! Temporibus sed .</p>
        </Section>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});