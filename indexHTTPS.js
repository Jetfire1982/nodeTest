const https = require('node:http');
const fs = require('node:fs');
const PORT = process.env.PORT || 5000;

const Router = require('./myExpress/router.js') 



const options = {
    key: fs.readFileSync(
        'test/fixtures/keys/agent2-key.pem'
    ),
    cert: fs.readFileSync(
        'test/fixtures/keys/agent2-cert.pem'
    ),
};

// const options = {
//     pfx: fs.readFileSync('test/fixtures/test_cert.pfx'),
//     парольная фраза: 'sample',
//   };
  



https
    .createServer(options, (req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    })
    .listen(5000);

