

//pegamos a entidade em si dessa forma usando .Categoria
const Categoria = require('../models').Category;

//Busca Categorias (GET)
const all = async (req, res) => {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
};

//Cadastra Categorias (POST)
const add = async (req, res) => {
    const { category_description } = req.body;
    const newEdit = await Categoria.create({ category_description })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
};

//Busca Por id a Categoria (GET)
const specific = async (req, res) => {
    const id = req.params;
    const categoria = await Categoria.findByPk(req.params.id);
    res.status(200).json(categoria);
};

//Deleta categoria por id (DELETE)
const del = async (req, res) => {
    await Categoria.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
};

//Altera Categoria por ID (PUT)
const update = async (req, res) => {
    const { category_description } = req.body;
    await Categoria.update(
        { category_description },
        {
            where: { id: req.params.id },
        }
    );
    res.status(200).json({ message: 'Atualizado com sucesso' });
};

module.exports = {
    all,
    add,
    specific,
    update,
    del
};