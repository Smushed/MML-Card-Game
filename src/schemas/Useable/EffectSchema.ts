import { Schema, model, Types } from 'mongoose';
import { ICardBaseSchema } from '../CardBaseSchema';

interface IEffectSchema extends ICardBaseSchema {
  onUse: Number;
}

const EffectSchema = new Schema<IEffectSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
  onUse: { type: Number, required: false },
});

const EffectModel = model<IEffectSchema>('Effect', EffectSchema);

export default EffectModel;
