/*
Thema: Schoolserver
Einfacher Server, um Daten (Studenten und Lehrbetrieb) im JSON Format an einen
Client zu senden.
Der Server dient zu Übung und Illustrationszwecken für Callbacks und Promises.
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://nodejs.org/api/path.html
const path = require('path');

//Warning: Korrekt setzen!!
const staticPath = './82_Schoolserver/00_Demo/data/';

//Allow CORS-Request and set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();

});

//Test-1: Text-Datei auslesen
app.get('/test', (req, res) => {
    let fileLoc = path.resolve(staticPath+'test.txt');
    fs.readFile(fileLoc, 'utf8',
        (err, text) =>
            res.send(text);
    }
}