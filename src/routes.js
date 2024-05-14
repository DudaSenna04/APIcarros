const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros',CarroController.buscarTodos);

modeule.express = router;