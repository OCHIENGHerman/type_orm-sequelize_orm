import express, { Request, Response } from 'express';
import testConnection  from './db';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});

testConnection();


app.listen(port, () => {
  console.log(`Server is running on port ${port}🚀`);
});