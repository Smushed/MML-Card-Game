import { ICardBase } from "../CardBase";
import CardType from "../Enum/CardType";
import EquipmentSlot from "../Enum/EquipmentSlot";

interface IEquipment extends ICardBase {
  slot: EquipmentSlot;
  bonus: number;
}

class Equipment implements IEquipment {
  _id: number;
  name: string;
  description: string;
  typeOfCard: CardType;

  slot: EquipmentSlot;
  bonus: number;

  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardType,
    slot: EquipmentSlot,
    bonus: number
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.typeOfCard = typeOfCard;
    this.slot = slot;
    this.bonus = bonus;
  }
}

export default Equipment;
