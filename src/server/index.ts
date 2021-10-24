import express, { Router } from 'express';
import path from 'path';
import logger from 'morgan';
import {todoFactory} from './controllers/todo';
import bodyParser from 'body-parser';
import {mathFactory} from './controllers/math';

const app = express()
const port = 3000

app.use(logger('dev'));
app.use(bodyParser.json());

todoFactory(app);
mathFactory(app);

const dir = path.join(process.cwd(), 'dist', 'static');
app.use(express.static(dir));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
