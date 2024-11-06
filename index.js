const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.redirect('localhost:3000/painel');
});

app.get('/painel', (req, res) => {
    console.log('redirecionado');
});

app.get('/historico', (req, res) => {
    res.send("Aqui vou ver o histórico do usuário");
});

app.post('/login', (req, res) => {
    res.send("Aqui vou receber o login do usuario");
});

app.post('/register', (req, res) => {
    res.send("Aqui vou criar novos usuarios");
});

app.put('/edit/:id', (req, res) =>{
    res.send("Aqui vou editar os pontos");
});

app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${PORT}`);
});