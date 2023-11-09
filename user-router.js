const Router = require("./router");
const controller = require('./user-controller')
const router = new Router();

const users = [
    { id: 1, name: 'ULBITV' },
    { id: 2, name: 'Vasya' }
]

// router.get('/users', (req, res) => {
//     res.end('YOU SEND REQUEST TO /users')
// })

// router.get('/posts', (req, res) => {
//     res.end('YOU SEND REQUEST TO /posts')
// })

router.get('/users', controller.getUsers)

router.post('/users', controller.createUser)



module.exports = router;