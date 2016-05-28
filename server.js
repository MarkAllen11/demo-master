var Express = require('express');
var App = Express();

App.use(Express.static(__dirname + '/frontend'));
App.listen(process.env.PORT || 8080);
