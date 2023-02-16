import { Schema, model, Types } from 'mongoose';
import { ICardBaseSchema } from '../CardBaseSchema';

interface IEventSchema extends ICardBaseSchema {
  isFlash: Boolean;
  onUse: Number;
}

const EventSchema = new Schema<IEventSchema>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  cardType: { type: String, required: true },
  imageId: { type: String, required: true },
  isFlash: { type: Boolean, required: true },
  onUse: { type: Number, required: false },
});

const EventModel = model<IEventSchema>('Event', EventSchema);

export default EventModel;
