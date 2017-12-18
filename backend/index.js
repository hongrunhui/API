var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var requestData = require('./formData');
const PORT = 9999;
var app = express();
app.use(express.static('../frontend'));
app.use(bodyParser.urlencoded());
app.post('/api/pm2', function(req, res) {
    var pm2 = requestData.pm2.data;
    var url = requestData.pm2.url;
    pm2.city = req.body.city;
    pm2.showapi_timestamp = getTime();
    getData(url, pm2, 'post', function(e, r, b) {
        console.log(b);
        res.json(b);
    });
});
app.post('/api/history', function(req, res) {
    var history = requestData.history.data;
    var url = requestData.history.url;
    history.date = req.body.date;
    history.showapi_timestamp = getTime();
    getData(url, history, 'post', function(e, r, b) {
        console.log(b);
        res.json(b);
    });
});
function getTime() {
    var now = new Date();
    var Y = now.getFullYear(),
        M = ( +now.getMonth() + 1 ),
        d = now.getDate(),
        h = now.getHours(),
        m = now.getMinutes()<10 ? '0' + now.getMinutes() : now.getMinutes(),
        s = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    var time = `${Y}${M}${d}${h}${m}${s}`;
    return time;
}
function getData(url, formData, method, callback){
    let fn;
    switch(method) {
        case 'post':
            fn = request.post;
            break;
        case 'get':
            fn = request.get;
            break;
    }
    
    fn(url, function(e, r, b) {
        callback(e, r, b);
    }).form(formData);
}
app.listen(PORT, function() {
    console.log('listen port: ' + PORT);
});