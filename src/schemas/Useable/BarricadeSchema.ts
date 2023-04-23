import { Schema, model, Types } from 'mongoose';
import { ICardBaseSchema } from '../CardBaseSchema';

interface IBarricade extends ICardBaseSchema {
  onUse: Number;
}

const BarricadeSchema = new Schema<IBarricade>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
  onUse: { type: Number, required: false },
});

const BarricadeModel = model<IBarricade>('Barricade', BarricadeSchema);

export default BarricadeModel;
