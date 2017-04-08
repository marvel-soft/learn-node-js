function start() {
    function sleep(milliseconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliseconds);
    }
    console.log('request handler "start" was called.');
    sleep(10000);
    return 'hello from start';
}

function upload() {
    console.log('request handler "upload" was called.');
    return 'hello from upload';
}

exports.start = start;
exports.upload = upload;