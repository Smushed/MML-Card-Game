import { Types } from 'mongoose';
import { ICardBase } from '../CardBase';
import CardTypeEnum from '../Enum/CardTypeEnum';

interface IEffect extends ICardBase {
  onUse: Function;
}

class Effect implements IEffect {
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

const createGenericEffect = (): Effect =>
  new Effect(
    new Types.ObjectId(),
    'Generic Effect',
    'Generic Effect Description',
    CardTypeEnum.Effect,
    'genericImage.png',
    () => {}
  );

export { createGenericEffect };

export default Effect;
