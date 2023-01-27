import CardType from "./Enum/CardType";

interface ICardBase {
  _id: number;
  name: string;
  description: string;
  typeOfCard: CardType;
}

class CardBase implements ICardBase {
  _id: number;
  name: string;
  description: string;
  typeOfCard: CardType;

  //Generated code, shouldn't need this. No cards should be here at this level
  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardType
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.typeOfCard = typeOfCard;
  }
}

export type { ICardBase };
export default CardBase;
