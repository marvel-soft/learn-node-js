var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');

function start(response, postData) {
    console.log('request handler "start" was called.');
    var body = '<html>' +
        '<head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" c;s="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log('request handler "upload" was called.');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('youve sent: ' + querystring.parse(postData).text);
    response.end();
}

function show(response, postData) {
    console.log('request handler show was called');
    response.writeHead(200, { "Content-Type": "img/png" });
    fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;