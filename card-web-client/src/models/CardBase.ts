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

  //Generated code, shouldn't need this. No cards should be here at this level
  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardTypeEnum
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.cardType = typeOfCard;
  }
}

function createGenericCardBase(): CardBase {
  return new CardBase(
    0,
    'Generic Card',
    'This is a generic card',
    CardTypeEnum.Monster
  );
}

interface ICardBase {
  _id: number;
  name: string;
  description: string;
  type: string;
}

export { createGenericCardBase };
export type { ICardBase };
export default CardBase;
