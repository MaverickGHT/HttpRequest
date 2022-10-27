const http = require ("http");
const url = require ("url");
const fs = require('fs');



const pagehttp= function (req, response) {
    console.log ("metodo" + req.method);
    console.log ("PATH:" + req.url);
    url_parts = url.parse(req.url, true);
    console.log(url_parts);
    var url1= "https://it.wikipedia.org/wiki/Pagina_principale";
    var url2= "https://www.ilsecoloxix.it/";
    var url3= "https://www.lastampa.it/";

    switch (req.url) {
        case "/html1": response.writeHead(302, {
            location: "https://it.wikipedia.org/wiki/Pagina_principale"
        }); response.end("ciao"); break;
    
        case "/html2": response.writeHead(302, {
            location: "https://www.ilsecoloxix.it/"
        }); response.end("ciao"); break;
    
        case "/html3": response.writeHead(302, {
            location: "https://www.lastampa.it/"
        }); response.end("ciao"); break;
    
        case "/Page1": fs.readFile('page1.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            response.end(data)
          }); 
           break;
    
        case "/Page2": fs.readFile('page2.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            response.end(data)
          }); 
          break;
    
        case "/Page3": fs.readFile('page3.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            response.end(data)
          }); 
          break;

          case "/form": fs.readFile('form.html', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            response.end(data)
          }); 
           break;
    
        case "/getQuery": console.log (url_parts.query);
         response.end(url_parts.query.scala); 
         break;
    
    }



}

module.exports = pagehttp;