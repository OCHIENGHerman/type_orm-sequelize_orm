import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://herman_user:sPi1Y2ChuhntYH0hUBnrmF6ohAEvi1i4@dpg-cndq3mf79t8c738f0ehg-a.oregon-postgres.render.com:5432/herman", {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default testConnection; 