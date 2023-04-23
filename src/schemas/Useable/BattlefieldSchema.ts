import { Schema, model } from 'mongoose';
import { ICardBaseSchema } from '../CardBaseSchema';

interface IBattlefield extends ICardBaseSchema {
  onUse: number;
}

const BattlefieldSchema = new Schema<IBattlefield>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
  onUse: { type: Number, required: false },
});

const BattlefieldModel = model<IBattlefield>('Battlefield', BattlefieldSchema);

export default BattlefieldModel;
