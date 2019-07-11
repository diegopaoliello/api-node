const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Rota principal
routes.get('/', (req, res) => {
    // Product.create({
    //     title: "React Native",
    //     description: "Construindo App nativo com React",
    //     url: "http://github.com/facebook/react-native"
    // });

    res.send('Hello API Server Nodejs!');
});


//Rota Produtos
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.put('/products/:id', ProductController.update);
routes.post('/products', ProductController.store);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;