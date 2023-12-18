require('dotenv').config();
const express = require('express');
const knex = require('./conexao');


const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const carros = await knex('carros');
        return res.json(carros);
    } catch (error) {
        return res.status(500).json({ mensagem: 'erro servidor' });
    }
})
console.log("ue");
const port = process.env.PORT || 3000;
console.log("oi");
app.listen(port, () => console.log(`servidor em pe na porta ${port}`));