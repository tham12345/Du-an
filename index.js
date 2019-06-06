var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var server = require('http').createServer(app);
// io = require('socket.io').listen(server);
server.listen(process.env.PORT || 2019, () => {
    console.log('Đã kết nối')
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var indexRoutes = require('./routes/index');
var kholuutrumauRoutes = require('./routes/kholuutrumau');
var thanhlytuimauRoutes = require('./routes/thanhlytuimau');

app.use('/', indexRoutes);
app.use('/kholuutrumau', kholuutrumauRoutes);
app.use('/thanhlytuimau', thanhlytuimauRoutes);