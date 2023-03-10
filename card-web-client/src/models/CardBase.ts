import CardTypeEnum from './Enum/CardTypeEnum';

class CardBase implements ICardBase {
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

  //Generated code, shouldn't need this. No cards should be here at this level
  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardTypeEnum,
    imageId: string
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = typeOfCard;
    this.imageId = imageId;
  }
}

interface ICardBase {
  _id: number;
  name: string;
  description: string;
  type: string;
  imageId: string;
}

export type { ICardBase };
export default CardBase;
