import CardBase from '../models/CardBase';
import CardBaseModel from '../schemas/CardBaseSchema';

module.exports = {
  getAllCards: async () => {
    console.log('get all hit');
    const cards = await CardBaseModel.find({}).exec();
    return cards;
  },
};
