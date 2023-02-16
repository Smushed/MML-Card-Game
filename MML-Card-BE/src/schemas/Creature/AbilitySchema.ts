import { Schema, model, Types } from 'mongoose';

interface IAbility {
  _id: Schema.Types.ObjectId;
  name: String;
  description: String;
  creaturesWith: Types.DocumentArray<Types.ObjectId>;
}

const AbilitySchema = new Schema<IAbility>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  creaturesWith: {
    types: Types.DocumentArray<Types.ObjectId>,
    required: false,
  },
});
const AbilityModel = model<IAbility>('Ability', AbilitySchema);

export default AbilityModel;
