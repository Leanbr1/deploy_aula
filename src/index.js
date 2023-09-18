require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('ok');
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`servidor em pe na porta ${port}`));