

//pegamos a entidade em si dessa forma usando .Editora
const Editora = require('../models').PublishingCompany;

//Search Publishing companies (GET)
const all = async (req, res) => {
    const editoras = await Editora.findAll();
    res.status(200).json(editoras);
};

//Create Publishing Companies (POST)
const add = async (req, res) => {
    const { publishing_company_description } = req.body;
    const newEdit = await Editora.create({ publishing_company_description })
    res.status(200).json({ message: 'Cadastrado com sucesso' });
};

//Specific search from Publishing Companies (GET)
const specific = async (req, res) => {
    const id = req.params;
    const editora = await Editora.findByPk(req.params.id);
    res.status(200).json(editora);
};

//Delete a Publishing Companies (DELETE)
const del = async (req, res) => {
    await Editora.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).json({ message: 'Excluído com sucesso' })
};

//Update a Publishing Company (PUT)
const update = async (req, res) => {
    const { publishing_company_description } = req.body;
    await Editora.update(
        { publishing_company_description },
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
