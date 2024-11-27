const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors()); // Permite o acesso do frontend
app.use(bodyParser.json());

// Função fictícia que processa o texto transcrito
const processarTranscricao = (texto) => {
  // Lógica para processar a transcrição (substitua conforme necessário)
  return texto;
};

// Rota para receber a transcrição do frontend
app.post('/transcricao', (req, res) => {
  try {
    const texto = req.body.texto;
    const textoProcessado = processarTranscricao(texto);
    res.json({ texto: textoProcessado });
  } catch (error) {
    console.error('Erro ao processar a transcrição:', error);
    res.status(500).json({ error: 'Erro ao processar a transcrição' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
