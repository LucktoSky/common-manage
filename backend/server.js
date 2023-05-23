const https = require("http");
const app = require("./app");
var fs = require('fs');

// var privateKey = fs.readFileSync('sslcert/server.key');
// var certificate = fs.readFileSync('sslcert/server.crt');

// var credentials = {key: privateKey, cert: certificate};

const PORT = process.env.PORT || 80;
// https
// //   .createServer(credentials,app)
//   .createServer(app)
app
  .listen(PORT, () => {
    console.log(`Server running on https://localhosts:${PORT}`);
});

// const fs = require('fs');
// const https = require('https');
// const cert = fs.readFileSync('./cert/xzenmart_com.crt');
// const ca = fs.readFileSync('./cert/xzenmart_com.ca-bundle');
// const key = fs.readFileSync('./cert/xzenmart_com.p7b');
// const app = require("./app");
// console.log(cert)

// let options = {
//     cert: cert, // fs.readFileSync('./ssl/example.crt');
//     ca: ca, // fs.readFileSync('./ssl/example.ca-bundle');
//     key: key // fs.readFileSync('./ssl/example.key');
//  };

// const PORT = process.env.PORT || 443;

// const httpsServer = https.createServer(options, app);

// httpsServer.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// })