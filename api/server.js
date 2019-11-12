var express = require('express');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var posts = require('./routes/videos');

var port = process.env.PORT || 3000; // process.env.PORT for heroku or online node server. this line does not effect the application.
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', index);
app.use('/api', posts);

app.use('*',function (req, res) {
    res.redirect('/');
});

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
})