import express = require('express');
import knex from './database/connection';
import EstoqueController from './controllers/EstoqueController';
import PessoaController from './controllers/PessoaController';
import TipoSanguineoController from './controllers/TipoSanguineoController';

const routes = express.Router()
const estoqueController = new EstoqueController()
const pessoaController = new PessoaController()
const tipoSanguineoController = new TipoSanguineoController()

//tipoSanguineo
// routes.post('/tiposanguineo', tipoSanguineoController.post)
routes.get('/tiposanguineo', tipoSanguineoController.getAll)

//Estoque
routes.get('/estoque', estoqueController.getAll)


//routes.post('/points', pointsController.create)
//routes.get('/points', pointsController.index)
//routes.get('/points/:id', pointsController.show)

export default routes;