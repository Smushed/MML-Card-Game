import CardType from "../Enum/CardType";
import EquipmentSlot from "../Enum/EquipmentSlot";
import { Ability, Effect, Equipment } from "../Useable";
import IBaseCreature from "./IBaseCreature";

interface IHero extends IBaseCreature {}

class Hero implements IHero {
  _id: number;
  name: string;
  description: string;
  typeOfCard: CardType;

  equippedItems: Equipment[];
  equipmentSlots: EquipmentSlot[];
  effect: Effect[];
  Abilities: Ability[];
  Exhaust: Function;

  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardType,
    equippedItems: Equipment[],
    equipmentSlots: EquipmentSlot[],
    effect: Effect[],
    Abilities: Ability[],
    Exhaust: Function
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
  }
}

export default Hero;
