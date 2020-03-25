const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 *GET: Buscar uma informação no BackEnd
 * POST: Criar uma Informação no BackEnd
 * PUT: Alterar uma Informação no BackEnd
 * DELETE: Apagar uma Informação no BackEnd
 */
/**
 * Tipos de Parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos"?"
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da Requisição, utilizado pra criar ou alterar recursos
 */
app.listen(3333);