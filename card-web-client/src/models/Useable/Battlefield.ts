import { ICardBase } from '../CardBase';
import CardTypeEnum from '../Enum/CardTypeEnum';

interface IBattlefield extends ICardBase {
  onUse: Function;
}

class Battlefield implements IBattlefield {
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
  imageId: string;

  onUse: Function;

  constructor(
    _id: number,
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

export default Battlefield;
