import sequelize from "sequelize";
import connection from "../config/config-sequelize.js";


const Pedido = connection.define('pedido', {
    cliente: {
        type: sequelize.STRING,
        allowNull: false
    },
    codProduto: {
        type: sequelize.INT,
        allowNull: false
    },
    produto: {
        type: sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: sequelize.FLOAT,
        allowNull: false
    }
});

Pedido.sync({ force: false });
export default Pedido;