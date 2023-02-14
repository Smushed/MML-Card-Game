import { Schema, model, connect } from 'mongoose';
import { IHero } from '../models/Creature/Hero';

const HeroSchema = new Schema<IHero>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  imageId: { type: String, required: true },
  level: {type: Number, required: true},
  equipmentSlots: {type: Array, required: true}, //EquipmentSlot[]};
  effect: Effect[];
  abilities: Ability[];
  exhaust: Function;
});

const HeroModel = model<IHero>('Hero', HeroSchema);

export default HeroModel;
