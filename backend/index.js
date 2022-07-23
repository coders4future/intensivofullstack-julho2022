const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors({
    origin: 'http://localhost:3001'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const medicamentoRouter = require('./routes/medicamento');

app.get('/', (req, res) => {
    console.log('tudo ok....')
    res.json({ message: "api está no ar" });
});

app.get('/coders', (req, res) => {
    res.json({ message: "coders" });
});

app.use('/medicamentos', medicamentoRouter);

app.listen(port, () => {
    console.log('servidor no ar na porta ' + port);
});