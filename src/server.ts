import express = require("express");
import cors = require('cors');
import routes from './routes';
// import knex from '../knexfile';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3333);