import Sequelize from "sequelize";
import connection from "../config/config-sequelize.js"

const Produto = connection.define('produtos', {
    produto:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Produto.sync({ force: false });
export default Produto;