import http from 'http';

export const server= http.createServer((req, res)=>{
    res.writeHead(200, {"Contet-type": "application/json"});
    res.end(
        JSON.stringify({
            data:'It works!!'
        })
    )
})

server.listen(5000, ()=> console.log('Server running on port 5000'))