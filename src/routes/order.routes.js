const controller = require('../controllers/order.controller')
const verify = require('../middleware')

module.exports = (app) => {
    app.post('/order',verify, controller.create);
}