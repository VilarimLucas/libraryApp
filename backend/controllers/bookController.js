
//pegamos a entidade em si dessa forma usando .Livro
const Livro = require('../models').Book;

// -- Esse é o INNER JOIN referente a VIEW data_books
// select b.id, b.title, a.author_name, c.category_description, pc.publishing_company_description from books as b
// inner join authors as a on a.id = b.fk_author
// inner join categories as c on c.id = b.fk_category
// inner join publishingcompanies as pc on pc.id = b.fk_publishingcompany;

//Busca Livro (GET)
const all = async (req, res) => {
    await Livro.sequelize.query("select * from data_books",
        { model: Livro }).then(function (books) {
            var nbooks = JSON.parse(JSON.stringify(books));
            res.status(200).json(nbooks);
        });
};

//Cadastra Livro (POST)
const add = async (req, res) => {
    const { fk_publishingcompany, fk_category, fk_author, title } = req.body;
    const newEdit = await Livro.create({
        fk_publishingcompany, fk_category, fk_author, title
    })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
};

// Busca Livro por ID (GET)
const specific = async (req, res) => {
    const livroId = req.params.id;

    try {
        // Consulta o livro pelo ID usando o Sequelize e a view data_books
        const livro = await Livro.sequelize.query(
            `SELECT * FROM data_books WHERE id = :livroId`,
            {
                replacements: { livroId },
                type: Livro.sequelize.QueryTypes.SELECT,
            }
        );

        // Verifica se o livro foi encontrado
        if (!livro || livro.length === 0) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        res.status(200).json(livro);
    } catch (error) {
        console.error('Erro ao buscar livro por ID:', error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
};


//Deleta Livro por id (DELETE)
const del = async (req, res) => {
    await Livro.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
};

//Altera Livro por ID (PUT)
const update = async (req, res) => {
    const { fk_publishingcompany, fk_category, fk_author, title } = req.body;
    await Livro.update(
        { fk_publishingcompany, fk_category, fk_author, title },
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