const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.redirect('localhost:3000/painel')
})

app.get('/painel', (req, res) => {
    console.log('redirecionado')
});

app.get('/historico', (req, res) => {
    res.send("Aqui vou ver o histórico do usuário")
})

app.post('/login', (req, res) => {
    const body = req.body

    console.log(body)

    res.send("Aqui vou autenticar o login");
});

app.post('/register', (req, res) => {
    res.send("Aqui vou criar novos usuarios");
});

app.listen(PORT, () => {
    console.log(`Servidor web ouvindo na porta ${PORT}`);
});