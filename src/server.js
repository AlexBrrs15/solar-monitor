const express = require('express');
const cors = require('cors'); // 👈 ADICIONA AQUI

const app = express();

app.use(cors()); // 👈 ADICIONA AQUI
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor solar rodando 🚀');
  });

  app.get('/status', (req, res) => {
    res.json({
        status: 'ok',
            energia: Math.random() * 5000
              });
              });

              app.listen(3000, () => {
                console.log('Servidor rodando na porta 3000');
                });