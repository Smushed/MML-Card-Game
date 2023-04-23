import { Schema, model, Types } from 'mongoose';
import { ICardBaseSchema } from '../CardBaseSchema';

interface IMonsterSchema extends ICardBaseSchema {
  level: Number;
  equipmentSlots: Types.DocumentArray<Types.ObjectId>;
  effect: Types.DocumentArray<Number>;
  abilities: Types.DocumentArray<Number>;
  exhaust: Types.DocumentArray<Number>;
  monsterType: Types.DocumentArray<Types.ObjectId>;
}

const MonsterSchema = new Schema<IMonsterSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
  level: { type: Number, required: true },
  equipmentSlots: {
    types: Types.DocumentArray<Types.ObjectId>,
    required: true,
  }, //Object IDs of the different slots
  effect: { types: Types.DocumentArray<Number>, required: true }, //Number ID for the different functions
  abilities: { types: Types.DocumentArray<Number>, required: true },
  exhaust: { types: Types.DocumentArray<Number>, required: true },
  monsterType: {
    types: Types.DocumentArray<Types.ObjectId>,
    required: true,
  },
});

const MonsterModel = model<IMonsterSchema>('Monster', MonsterSchema);

export default MonsterModel;
