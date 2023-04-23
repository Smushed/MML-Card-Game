import { Application } from 'express';
import { Document } from 'mongoose';
const creatureHandler = require('../handlers/creatureHandler');

module.exports = (app: Application) => {
  app.get('/api/monsterType', async (req, res) => {
    creatureHandler
      .getAllMonsterTypes()
      .then((dbRes: Document[]) => res.send(dbRes))
      .catch((err: string) => res.status(409).send(err));
  });

  app.post('/api/monsterType', async (req, res) => {
    const { monsterType } = req.body;
    creatureHandler
      .saveMonsterType(monsterType)
      .then((dbRes: Document) => res.send(dbRes))
      .catch((err: string) => res.status(409).send(err));
  });
};
