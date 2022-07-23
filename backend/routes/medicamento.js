const express = require('express');
const router = express.Router();

const medicamentos = require('../services/medicamentos');

// Listar todos os medicamentos
router.get('/', async function (req, res, next) {
    try {
        res.json(await medicamentos.getMedicamentos(req.query.page));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});

// incluir Medicamento
router.post('/incluir', async function (req, res, next) {

    console.log(req);

    const pInfo =  {
        nome,
        codigo_barras
    } = req.body;
    
    console.log(nome);

    try {
        res.json(await medicamentos.incluirMedicamentos(pInfo));
    } catch (err) {
        console.error(`Erro`, err.message);
        next(err);
    }
});


module.exports = router;