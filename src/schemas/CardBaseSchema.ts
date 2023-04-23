import { Schema, model } from 'mongoose';

interface ICardBaseSchema {
  _id: Schema.Types.ObjectId;
  name: String;
  description: String;
  cardType: String;
  imageId: String;
}

const CardBaseSchema = new Schema<ICardBaseSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
});

const CardBaseModel = model<ICardBaseSchema>('CardBase', CardBaseSchema);

export type { ICardBaseSchema };
export default CardBaseModel;
