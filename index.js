const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

app.get('/',function(req,res) {
    res.send({ok: true});
});

https.createServer({
    cert: fs.readFileSync('../sslcert/fullchain.pem'),
    key: fs.readFileSync('../sslcert/privkey.pem')
},app).listen(443);