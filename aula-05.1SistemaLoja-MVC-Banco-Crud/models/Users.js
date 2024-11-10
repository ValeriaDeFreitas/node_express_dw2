import Sequelize from "sequelize"
import connection from "../config/config-sequelize.js";

const Users = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
Users.sync({ force: false });
export default Users