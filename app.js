import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import Project from './models/Project.js';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// connect to mongodb
mongoose.connect(process.env.DB_URL)
  .then( result => app.listen(8000))
  .catch( err => console.log(err));


app.get('/projects', (req, res) => {
  Project.find().sort( { _id: -1 } )
    .then( result => res.send(result) )
    .catch( err => console.log(err));
})
