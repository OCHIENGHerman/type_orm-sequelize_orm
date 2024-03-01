import express, { Request, Response } from 'express';
import "reflect-metadata"

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}🚀`);
});