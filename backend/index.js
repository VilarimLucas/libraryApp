const express = require('express');
const bodyParser = require('body-parser');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: authoriza para qualquer tipo de serviço (front-end, outras apis, etc)
const cors = require('cors')
const app = express();
const port = 3000;

//importações
const publishingCompany = require('./controllers/publishingCompanyController.js');
const category = require('./controllers/categoryController.js');
const author = require('./controllers/authorController.js');
const book = require('./controllers/bookController.js');

//Rotas
app.use(bodyParser.json());

//Função CORS para a autorização do uso da API
app.use(cors())

app.get('/', (req, res) => res.send('Estou aqui'))
app.use('/publishing-company', publishingCompany);
app.use('/category', category);
app.use('/author', author);
app.use('/book', book);

app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))