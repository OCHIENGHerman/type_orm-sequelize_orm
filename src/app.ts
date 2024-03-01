import express, { Request, Response } from 'express';
import "reflect-metadata";

import testConnection  from './db';
import AppDataSource from './data-source';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});

testConnection();

app.get('/test-connection', async (req: Request, res: Response) => {
  try {
    const isConnected = await AppDataSource.isInitialized;
    if (isConnected) {
      res.send('Database connected!');
    } else {
      res.send('Database not connected!');
    }
  } catch (error) {
    console.error("Error testing connection:", error);
    res.status(500).send('Internal Server Error');
  }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}🚀`);
});