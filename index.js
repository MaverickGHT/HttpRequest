const http = require ("http");
const url = require ("url");
const fs = require('fs');
let decision = require ('./decision');
const pagehttp = require("./decision");

const host = "0.0.0.0";
const port = "80";

pagehttp;

const server = http.createServer(pagehttp);
server.listen(port, host, ()=> {
    console.log(`server is running on http://${host}:${port}`);
});