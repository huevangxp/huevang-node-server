const controller = require('../controllers/user.controller')

module.exports = (app) => {
    app.post('/user', controller.create);
    app.get('/user', controller.select);
    app.get('/user/:id', controller.selectById);
    app.put('/user/:id', controller.update);
    app.delete('/user/:id', controller.delete);
}