
//pegamos a entidade em si dessa forma usando .Autor
const Autor = require('../models').Author;

//Busca Autor (GET)
const all = async (req, res) => {
    const autores = await Autor.findAll();
    res.status(200).json(autores);
};

//Cadastra Autor (POST)
const add = async (req, res) => {
    const { author_name } = req.body;
    const newEdit = await Autor.create({ author_name });
    res.status(200).json({ message: 'Cadastrado com sucesso' });
};

//Busca Por id o Autor (GET)
const specific = async (req, res) => {
    const id = req.params;
    const autor = await Autor.findByPk(req.params.id);
    res.status(200).json(autor);
};

//Deleta Autor por id (DELETE)
const del = async (req, res) => {
    await Autor.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
};

//Altera Autor por ID (PUT)
const update = async (req, res) => {
    const { author_name } = req.body;
    await Autor.update(
        { author_name },
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