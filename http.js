const http = require('http');


const server = http.createServer((req, res) =>{
    
    if(req.url == '/'){
        res.end('welcome to our home page');

    }
    if(req.url == '/about'){
        res.end('this is our brief history')
    }

    res.end(`
    <h1>Ooops!</h1>
    <p>the page you are requesting is not found</p>
    <a href= "/"> back home</a>
    
    `)


})


server.listen(5000);