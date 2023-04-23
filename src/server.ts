import express, { Express } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
require('dotenv').config();

const app: Express = express();
const jsonParser = bodyParser.json();
app.use(jsonParser);

const port = process.env.PORT || 4040;

let mongoURL: string;
if (process.env.NODE_ENV === 'production') {
  mongoURL = process.env.MONGO_ATLAS || '';
} else {
  mongoURL = 'mongodb://127.0.0.1:27017/mml-card';
}

mongoose
  .connect(mongoURL)
  .then(() => console.log('Mongoose Connected Successfully'))
  .catch((err) => console.log('Mongoose Connection Error: ', err));

require('./routes/cardRoutes')(app);
require('./routes/creatureRoutes')(app);

app.get(`*`, (req, res) => {
  res.sendFile(path.join(__dirname, `./client/build/index.html`));
});

app.listen(port, () => {
  console.log(`Server started running on https://localhost:${port}`);
});