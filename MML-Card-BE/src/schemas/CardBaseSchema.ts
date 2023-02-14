import { Schema, model, connect } from 'mongoose';
import { ICardBase } from '../models/CardBase';

const CardBaseSchema = new Schema<ICardBase>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  imageId: { type: String, required: true },
});

const CardBaseModel = model<ICardBase>('CardBase', CardBaseSchema);

export default CardBaseModel;
