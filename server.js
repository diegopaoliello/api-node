const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando App
const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


//Iniciando conexao com banco de dados MongoDB
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true});

//Conecta ao banco de dados
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-qfz42.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


requireDir('./src/models');

const Product = mongoose.model('Product');

//Rotas
app.use("/api", require("./src/routes"));

app.listen(port);