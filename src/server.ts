import express = require("express");
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())
app.listen(3333);