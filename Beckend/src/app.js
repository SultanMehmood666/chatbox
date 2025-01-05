const express = require('express');
const app = express();

app.get('/', (req, resp)=>{
    resp.send("Hello World");
})

module.exports=app;