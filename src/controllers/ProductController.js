const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //Lista os produtos
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    //Busca um produto
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //Insere um produto
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //Atualiza um produto
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    //Remove um produto
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);       

        return res.send();
    }
};