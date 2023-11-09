// const path = require('path')
// const http = require('http')

// console.log(path.join('..', __filename));

// // console.log(__dirname);
// // console.log(__filename);


// const PORT = process.env.PORT || 5000;
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
//     res.end(req.url)
//     // res.end('<h1>Hello dear friend!!!</h1>')
// })
// server.listen(PORT, ()=>console.log(`Server started on PORT ${PORT} `))
const PORT = process.env.PORT||5000;
const userRouter = require("./user-router");
const Application = require("./application");
const jsonParser = require('./parseJson')
const parseUrl = require('./parseUrl');


const app = new Application();
app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
// const router = new Router();

// router.get('/users', (req, res) => {
//     res.end('YOU SEND REQUEST TO /users')
// })

// router.get('/posts', (req, res) => {
//     res.end('YOU SEND REQUEST TO /posts')
// })

app.addRouter(userRouter)
app.listen(PORT, ()=>console.log(`Server started on PORT ${PORT}`))