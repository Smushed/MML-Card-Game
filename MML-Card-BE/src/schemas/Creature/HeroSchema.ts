import { Schema, model, Types } from 'mongoose';
import { ICardBaseSchema } from '../CardBaseSchema';

interface IHeroSchema extends ICardBaseSchema {
  level: Number;
  equipmentSlots: Types.DocumentArray<Types.ObjectId>;
  effect: Types.DocumentArray<Number>;
  abilities: Types.DocumentArray<Number>;
  exhaust: Types.DocumentArray<Number>;
}

const HeroSchema = new Schema<IHeroSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
  level: { type: Number, required: true },
  equipmentSlots: {
    types: Types.DocumentArray<Types.ObjectId>,
    required: false,
  }, //Object IDs of the different slots
  effect: { types: Types.DocumentArray<Number>, required: false }, //Number ID for the different functions
  abilities: { types: Types.DocumentArray<Number>, required: false },
  exhaust: { types: Types.DocumentArray<Number>, required: false },
});

const HeroModel = model<IHeroSchema>('Hero', HeroSchema);

export default HeroModel;
