const controller = require('../controllers/category.controller')

module.exports = (app) => {
    app.post('/category', controller.createCategory);
    app.get('/category', controller.selectCategory);
    app.get('/category/:id', controller.selectCategoryById);
    app.delete('/category/:id', controller.deleteCategory);
    app.put('/category/:id', controller.updateCategory);
}