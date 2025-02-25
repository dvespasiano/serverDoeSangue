import express = require("express");
import cors = require('cors');
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(3333);