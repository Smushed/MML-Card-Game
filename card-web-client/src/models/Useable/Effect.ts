import { ICardBase } from "../CardBase";
import CardType from "../Enum/CardType";

interface IEffect extends ICardBase {
  onTrigger: Function;
}

class Effect implements IEffect {
  _id: number;
  name: string;
  description: string;
  typeOfCard: CardType;

  onTrigger: Function;

  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardType,
    onTrigger: Function
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.typeOfCard = typeOfCard;
    this.onTrigger = onTrigger;
  }
}

export default Effect;
