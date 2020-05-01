const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cca6t.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP: GET,POST,PUT, DELETE

// Tips de parâmetros: 
// query params: request.query (usados para filtros, ordenação, paginação, etc)  
// route params: request.parans (identificar um recuro de alteração ou remoção)
// body: request.body (Dados para criaão ou alteração de um registro)

//mongoDB (não relacional)


