import { Types } from 'mongoose';
import { ICardBase } from '../CardBase';
import CardTypeEnum from '../Enum/CardTypeEnum';

interface IBattlefield extends ICardBase {
  onUse: Function;
}

class Battlefield implements IBattlefield {
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

  onUse: Function;

  constructor(
    _id: Types.ObjectId,
    name: string,
    description: string,
    cardType: CardTypeEnum,
    imageId: string,
    onUse: Function
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = cardType;
    this.imageId = imageId;
    this.onUse = onUse;
  }
}

const createGenericBattlefield = (): Battlefield =>
  new Battlefield(
    new Types.ObjectId(),
    'Generic Battlefield',
    'Generic Battlefield Description',
    CardTypeEnum.Battlefield,
    'genericImage.png',
    () => {}
  );

export { createGenericBattlefield };

export default Battlefield;
