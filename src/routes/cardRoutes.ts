import { Application } from 'express';
const cardHandler = require('../handlers/cardHandler');

module.exports = (app: Application) => {
  app.get('/api/card/all', async (req, res) => {
    const pulledCards = await cardHandler.getAllCards();
    console.log({ pulledCards });
    res.send(pulledCards);
  });
};
