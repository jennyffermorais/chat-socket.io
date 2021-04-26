var express = require('express');
var app = express();

// express vai rodar com base no servidor http nativo do node
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index');
});

http.listen(4000, () => {
   console.log('app rodando');
});
