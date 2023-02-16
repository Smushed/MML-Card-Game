import { Types } from 'mongoose';
import { ICardBase } from '../CardBase';
import CardTypeEnum from '../Enum/CardTypeEnum';
import EquipmentSlotEnum from '../Enum/EquipmentSlotEnum';

interface IEquipment extends ICardBase {
  bonus: number;
}

class Equipment implements IEquipment {
  private _id: Types.ObjectId;
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

  private slot: EquipmentSlotEnum;
  public get equipmentSlot(): string {
    return EquipmentSlotEnum[this.slot];
  }
  private set equipmentSlot(value: string) {
    this.slot = EquipmentSlotEnum[value as keyof typeof EquipmentSlotEnum];
  }
  bonus: number;

  constructor(
    _id: Types.ObjectId,
    name: string,
    description: string,
    cardType: CardTypeEnum,
    imageId: string,
    slot: EquipmentSlotEnum,
    bonus: number
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = cardType;
    this.imageId = imageId;
    this.slot = slot;
    this.bonus = bonus;
  }
}

const createGenericEquipment = (): Equipment =>
  new Equipment(
    new Types.ObjectId(),
    'Generic Equipment',
    'Generic Equipment Description',
    CardTypeEnum.Equipment,
    'genericImage.png',
    EquipmentSlotEnum.Head,
    1
  );

export { createGenericEquipment };

export default Equipment;
