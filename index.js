const http = require('http');
const fs = require('fs');
const server=http.createServer((req, res)=>{
    if(req.url=='/')
    {
        fs.readFile("home.html","utf-8",(err,data)=>{                                                          
            if(err)
            {
                console.log("Error",err);
                res.end("Error Reading Home.html");
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url=='/about')
    {
        fs.readFile("about.html","utf-8",(err,data)=>{                                                          
            if(err)
            {
                console.log("Error",err);
                res.end("Error Reading about.html");
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url=='/contact')
    {
        fs.readFile("contact.html","utf-8",(err,data)=>{                                                          
            if(err)
            {
                console.log("Error",err);
                res.end("Error Reading about.html");
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url=='/signup')
    {
        fs.readFile("signup.html","utf-8",(err,data)=>{                                                          
            if(err)
            {
                console.log("Error",err);
                res.end("Error Reading signup.html");
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url=='/login')
    {
        fs.readFile("login.html","utf-8",(err,data)=>{                                                          
            if(err)
            {
                console.log("Error",err);
                res.end("Error Reading login.html");
            }
            else{
                res.end(data);
            }
        })
    }
})
server.listen(8000,()=>{
console.log("Server listening on port 3011");
})