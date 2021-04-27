var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
   socket.on('disconnect', () => {
      console.log(` X desconectou: ${socket.id} `);
   });

   // escuta o evento msg e devolve para o front os dados que recebeu
   socket.on('msg', (data) => {
      socket.emit('showMsg', data);
      console.log(data);
   });
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index');
});

http.listen(4000, () => {
   console.log('App rodando');
});
