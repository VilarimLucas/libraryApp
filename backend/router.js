const express = require('express');
const router = express.Router();

//importações
const publishingCompany = require('./controllers/publishingCompanyController.js');
const category = require('./controllers/categoryController.js');
const author = require('./controllers/authorController.js');
const book = require('./controllers/bookController.js');


router.get('/', (req, res) => res.send('Estou aqui'));

// Rotas do CRUD de Editora
router.post('/publishing-company/add', publishingCompany.add);
router.get('/publishing-company/all', publishingCompany.all);
router.get('/publishing-company/:id', publishingCompany.specific);
router.put('/publishing-company/:id', publishingCompany.update);
router.delete('/publishing-company/:id', publishingCompany.del);

// Rotas do CRUD de Categoria
router.post('/category/add', category.add);
router.get('/category/all', category.all);
router.get('/category/:id', category.specific);
router.put('/category/:id', category.update);
router.delete('/category/:id', category.del);

// Rotas do CRUD do autor
router.post('/author/add', author.add);
router.get('/author/all', author.all);
router.get('/author/:id', author.specific);
router.put('/author/:id', author.update);
router.delete('/author/:id', author.del);

// Rotas do CRUD do book
router.post('/book/add', book.add);
router.get('/book/all', book.all);
router.get('/book/:id', book.specific);
router.put('/book/:id', book.update);
router.delete('/book/:id', book.del);


module.exports = router;
