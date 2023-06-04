const express = require("express");
const http = require('http');
require('dotenv').config();
const router = require('./router/all.roter')
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;
app.use(express.urlencoded({extended : true}));
app.use(express.json());
const dbConnect = require('./config/config')
app.use(cors());
app.use('/',router)


app.get('/', (req, res)=>{
    res.send("hello world!");
})

server.listen(port, ()=>{
    dbConnect();
    console.log('this server is start ' + port)
})