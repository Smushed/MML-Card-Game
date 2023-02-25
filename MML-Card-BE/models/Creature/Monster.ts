import CardTypeEnum from '../Enum/CardTypeEnum';
import EquipmentSlotEnum from '../Enum/EquipmentSlotEnum';
import EquipmentSlot from '../Enum/EquipmentSlotEnum';
import { Equipment, Effect } from '../Useable';
import { IBaseCreature } from './IBaseCreature';
import Ability from './Ability';
import { Types } from 'mongoose';

interface IMonster extends IBaseCreature {
  monsterType: string[];
}

class Monster implements IMonster {
  private _id: Types.ObjectId;
  public get id(): string {
    return this._id.toHexString();
  }
  name: string;
  description: string;
  cardType: CardTypeEnum;
  public get type(): string {
    return CardTypeEnum[this.cardType];
  }
  public set type(value: string) {
    this.cardType = CardTypeEnum[value as keyof typeof CardTypeEnum];
  }
  imageId: string;
  // public get image(): string {}

  level: number;
  equippedItems: Equipment[];
  equipmentSlots: EquipmentSlot[];
  effect: Effect[];
  abilities: Ability[];
  exhaust: Function;

  monsterType: string[];

  constructor(
    _id: Types.ObjectId,
    name: string,
    description: string,
    typeOfCard: CardTypeEnum,
    imageId: string,
    level: number,
    equippedItems: Equipment[],
    equipmentSlots: EquipmentSlot[],
    effect: Effect[],
    abilities: Ability[],
    exhaust: Function,
    monsterType: string[]
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = typeOfCard;
    this.imageId = imageId;
    this.level = level;
    this.equippedItems = equippedItems;
    this.equipmentSlots = equipmentSlots;
    this.effect = effect;
    this.abilities = abilities;
    this.exhaust = exhaust;
    this.monsterType = monsterType;
  }
}

const createGenericMonster = (): Monster =>
  new Monster(
    new Types.ObjectId(), // _id
    'Generic Card', // name
    'This is a generic card', // description
    CardTypeEnum.Monster, // typeOfCard
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
    [], // abilities
    () => {}, // exhaust
    ['Generic', 'Undead'] // monsterType
  );

export { createGenericMonster };
export default Monster;
