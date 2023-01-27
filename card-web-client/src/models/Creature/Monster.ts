import CardType from "../Enum/CardType";
import EquipmentSlot from "../Enum/EquipmentSlot";
import { Equipment, Effect, Ability } from "../Useable";
import IBaseCreature from "./IBaseCreature";

interface IMonster extends IBaseCreature {
  monsterType: string[];
}

class Monster implements IMonster {
  _id: number;
  name: string;
  description: string;
  typeOfCard: CardType;

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
    typeOfCard: CardType,
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
    this.typeOfCard = typeOfCard;
    this.equippedItems = equippedItems;
    this.equipmentSlots = equipmentSlots;
    this.effect = effect;
    this.Abilities = Abilities;
    this.Exhaust = Exhaust;
    this.monsterType = monsterType;
  }
}

export default Monster;
