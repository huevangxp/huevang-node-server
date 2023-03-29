const controller = require('../controllers/user.controller')
const verify = require('../middleware')

module.exports = (app) => {
    app.post('/user', controller.create);
    app.get('/user',verify, controller.select);
    app.get('/user/:id', controller.selectById);
    app.put('/user/:id', controller.update);
    app.delete('/user/:id', controller.delete);
    app.post('/login',controller.login)
}