var express = require('express');
var app = express();

// express vai rodar com base no servidor http nativo do node
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// evento que é disparado sempre que um cliente se conecta
// o socket é a instância, a conexão com o cliente
io.on('connection', (socket) => {
   socket.on('disconnect', () => {
      console.log(` X desconectou: ${socket.id} `);
   });

   // vai escutar qualquer evento com esse nome que vier desse cliente/socket
   // recebe os dados que o front enviou
   // data = dados que o front enviou
   socket.on('boasvindas', (data) => {
      console.log(data);
   });

   socket.on('palavra', (data) => {
      console.log(data);

      // um evento do back para o front
      socket.emit('resultado', ` ${data} `);
   });
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index');
});

http.listen(4000, () => {
   console.log('app rodando');
});
