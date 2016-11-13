const express = require('express');
const service = require('./service.js');
const utilities  = require('./utilities.js')

const app = express();

app.get('/news', (request, response) => {

    service.getData().then((news)=>{
        //console.log("check maadi", news)
        var links = utilities.getLinks(news);
        response.send(links);
    });
    
});

app.listen(8080, 'localhost');