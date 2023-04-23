import { Schema, model } from 'mongoose';
import { ICardBaseSchema } from '../CardBaseSchema';

interface IEquipmentSchema extends ICardBaseSchema {
  bonus: Number;
}

const EquipmentSchema = new Schema<IEquipmentSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
  bonus: { type: Number, required: false },
});

const EquipmentModel = model<IEquipmentSchema>('Equipment', EquipmentSchema);

export default EquipmentModel;
