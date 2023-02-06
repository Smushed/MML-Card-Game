import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

const app: Express = express();
const port = process.env.PORT || 8081;

console.log(process.env.NODE_ENV);
let mongoURL: string;
if (process.env.NODE_ENV === 'production') {
  mongoURL = process.env.MONGO_ATLAS || '';
} else {
  mongoURL = 'mongodb://localhost:27017/mml-card';
}

mongoose
  .connect(mongoURL)
  .then(() => console.log('Mongoose Connected Successfully'))
  .catch((err) => console.log('Mongoose Connection Error: ', err));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is Express + TypeScript');
});

app.listen(port, () => {
  console.log(`Server started running on https://localhost:${port}`);
});
