import CardTypeEnum from '../Enum/CardTypeEnum';
import EquipmentSlotEnum from '../Enum/EquipmentSlotEnum';
import EquipmentSlot from '../Enum/EquipmentSlotEnum';
import { Equipment, Effect } from '../Useable';
import IBaseCreature from './IBaseCreature';
import Ability from './Ability';

interface IMonster extends IBaseCreature {
  monsterType: string[];
}

class Monster implements IMonster {
  _id: number;
  name: string;
  description: string;
  private cardType: CardTypeEnum;
  public get type(): string {
    return CardTypeEnum[this.cardType];
  }
  public set type(value: string) {
    this.cardType = CardTypeEnum[value as keyof typeof CardTypeEnum];
  }

  level: number;
  equippedItems: Equipment[];
  equipmentSlots: EquipmentSlot[];
  effect: Effect[];
  Abilities: Ability[];
  Exhaust: Function;

  monsterType: string[];

  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardTypeEnum,
    level: number,
    equippedItems: Equipment[],
    equipmentSlots: EquipmentSlot[],
    effect: Effect[],
    Abilities: Ability[],
    Exhaust: Function,
    monsterType: string[]
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = typeOfCard;
    this.level = level;
    this.equippedItems = equippedItems;
    this.equipmentSlots = equipmentSlots;
    this.effect = effect;
    this.Abilities = Abilities;
    this.Exhaust = Exhaust;
    this.monsterType = monsterType;
  }
}

function createGenericMonster(): Monster {
  return new Monster(
    0, // _id
    'Generic Card', // name
    'This is a generic card', // description
    CardTypeEnum.Monster, // typeOfCard
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
    () => {}, // Exhaust
    ['Generic', 'Undead'] // monsterType
  );
}

export { createGenericMonster };
export default Monster;
