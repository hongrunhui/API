var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

function Request(url,action,callback) {
    request(url, function (error, response, body) {
        if(response && response.statusCode==200){
            // console.log(body);
            $ = cheerio.load(body,{decodeEntities: false});
            callback({state:true,info:"返回成功",data:action($)});
        }else{
            console.log('error',error);
            callback({state:false,info:error,data:""});
        }
    });
}
var url = 'http://cp01-bpit-art-hife-test01.epc.baidu.com:8080/eim-web-sdk-document/output-src.js';
Request(url, filter, function(data) {
    console.log(data);
});
function filter(data) {
    return JSON.parse(data.html());
}