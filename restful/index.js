

const http = require ('http');


let server = http.createServer((req, res)=>{

    console.log('URL' , req.url);
    console.log('METHOD' , req.method);


    switch(req.url){
        case '/' :
            
            res.setHeader('Content-Type' , 'text/html');
            res.end('<h1>Olá</h1>');
            res.statusCode = 200;
            break;

        case '/users' :
            res.statusCode = 200;
            res.setHeader('Content-Type' , 'application/json');
            res.end(JSON.stringify({
                users:[{
                    name: 'Alex Appelt',
                    email: 'alexappelt6501@gmail.com',
                    id: 1
                }]

            }))

        break;

    }

})


server.listen(3000, '0.0.0.0' , ()=>{

    console.log('servidor rodando...!');

});