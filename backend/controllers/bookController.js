const express = require('express');
const router = express.Router();

//pegamos a entidade em si dessa forma usando .Livro
const Livro = require('../models').Book;

//Busca Livro (GET)
router.get('/', async (req, res) => {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
});

//Cadastra Livro (POST)
router.post('/', async (req, res) => {
    const { fk_publishingcompany, fk_category, fk_author, title } = req.body;
    const newEdit = await Livro.create({
        fk_publishingcompany, fk_category, fk_author, title
    })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
});

//Busca Por id o Livro (GET)
router.get('/:id', async (req, res) => {
    const id = req.params;
    const livro = await Livro.findByPk(req.params.id);
    res.status(200).json(livro);
});

//Deleta Livro por id (DELETE)
router.delete('/:id', async (req, res) => {
    await Livro.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
});

//Altera Livro por ID (PUT)
router.put('/:id', async (req, res) => {
    const { fk_publishingcompany, fk_category, fk_author, title } = req.body;
    await Autor.update(
        { fk_publishingcompany, fk_category, fk_author, title },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
});

module.exports = router;