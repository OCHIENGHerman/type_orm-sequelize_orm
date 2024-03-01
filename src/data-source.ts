import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://herman_user:sPi1Y2ChuhntYH0hUBnrmF6ohAEvi1i4@dpg-cndq3mf79t8c738f0ehg-a.oregon-postgres.render.com:5432/herman",
    ssl: {
         rejectUnauthorized: false,  // Set to false if using self-signed certificates
    },
});

AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
});

export default AppDataSource;