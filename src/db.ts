import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://postgres:postgres@localhost:5432/seculize_orm");

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default testConnection; 