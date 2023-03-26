const controller = require('../controllers/product.controller')

module.exports = (app) => {
    app.post('/product', controller.create);
    app.get('/product', controller.select);
    app.get('/product/:id', controller.selectById);
    app.put('/product/:id', controller.update);
    app.delete('/product/:id',controller.delete)
}