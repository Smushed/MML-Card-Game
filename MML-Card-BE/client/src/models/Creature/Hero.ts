import { Schema, model, connect, Types } from 'mongoose';
import CardTypeEnum from '../Enum/CardTypeEnum';
import EquipmentSlotEnum from '../Enum/EquipmentSlotEnum';
import EquipmentSlot from '../Enum/EquipmentSlotEnum';
import { Effect, Equipment } from '../Useable';
import Ability from './Ability';
import { IBaseCreature } from './IBaseCreature';

interface IHero extends IBaseCreature {}

class Hero implements IHero {
  _id: Types.ObjectId;
  name: string;
  description: string;
  private cardType: CardTypeEnum;
  public get type(): string {
    return CardTypeEnum[this.cardType];
  }
  public set type(value: string) {
    this.cardType = CardTypeEnum[value as keyof typeof CardTypeEnum];
  }
  imageId: string;

  level: number;
  equippedItems: Equipment[];
  equipmentSlots: EquipmentSlot[];
  effect: Effect[];
  abilities: Ability[];
  exhaust: Function;

  constructor(
    _id: Types.ObjectId,
    name: string,
    description: string,
    cardType: CardTypeEnum,
    imageId: string,
    level: number,
    equippedItems: Equipment[],
    equipmentSlots: EquipmentSlot[],
    effect: Effect[],
    abilities: Ability[],
    exhaust: Function
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = cardType;
    this.imageId = imageId;
    this.level = level;
    this.equippedItems = equippedItems;
    this.equipmentSlots = equipmentSlots;
    this.effect = effect;
    this.abilities = abilities;
    this.exhaust = exhaust;
  }
}

const HeroSchema = new Schema<IHero>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  imageId: { type: String, required: true },
  level: { type: Number, required: true },
  equippedItems: { type: [Equipment], required: true },
  equipmentSlots: { type: [EquipmentSlot], required: true },
  effect: { type: [Effect], required: true },
  abilities: { type: [Ability], required: true },
  exhaust: { type: Function, required: true },
});

const HeroModel = model<IHero>('Hero', HeroSchema);

function createGenericHero(): Hero {
  return new Hero(
    new Types.ObjectId(), // _id
    'Generic Hero Card', // name
    'This is the Hero Description', // description
    CardTypeEnum.Hero, // typeOfCard
    'genericImage.png', // image
    1, // level
    [], // equippedItems
    [
      EquipmentSlotEnum.Head,
      EquipmentSlotEnum.Arm,
      EquipmentSlotEnum.Arm,
      EquipmentSlotEnum.Torso,
      EquipmentSlotEnum.Leg,
      EquipmentSlotEnum.Leg,
      EquipmentSlotEnum.Ranged,
    ], // equipmentSlots
    [], // effect
    [], // Abilities
    () => {} // Exhaust
  );
}

export { createGenericHero, HeroSchema, HeroModel };
export default Hero;
