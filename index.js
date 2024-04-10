const http = require('http');
const PORT = process.env.PORT || 5000;

const Router = require('./myExpress/router.js') 




const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
 })

 const server = http.createServer((req, res)=>{
    router.emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
 })

 server.listen(PORT, ()=>console.log(`Server started on PORT ${PORT}`))