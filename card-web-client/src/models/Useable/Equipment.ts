import { ICardBase } from '../CardBase';
import CardTypeEnum from '../Enum/CardTypeEnum';
import EquipmentSlotEnum from '../Enum/EquipmentSlotEnum';

interface IEquipment extends ICardBase {
  bonus: number;
}

class Equipment implements IEquipment {
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

  private slot: EquipmentSlotEnum;
  public get equipmentSlot(): string {
    return EquipmentSlotEnum[this.slot];
  }
  private set equipmentSlot(value: string) {
    this.slot = EquipmentSlotEnum[value as keyof typeof EquipmentSlotEnum];
  }
  bonus: number;

  constructor(
    _id: number,
    name: string,
    description: string,
    cardType: CardTypeEnum,
    slot: EquipmentSlotEnum,
    bonus: number
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = cardType;
    this.slot = slot;
    this.bonus = bonus;
  }
}

export default Equipment;
