process.title = 'MyWebServer';

var args = process.argv,
    port = args[2] || 80,
    webServer = require('./server');

webServer.listen(port,function(){
    console.log('Server started at port '+ port);
});