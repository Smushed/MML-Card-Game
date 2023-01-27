import { ICardBase } from "../CardBase";
import CardType from "../Enum/CardType";

interface IAbility extends ICardBase {
  onUse: Function;
  description: string;
}

class Ability implements IAbility {
  _id: number;
  name: string;
  description: string;
  typeOfCard: CardType;

  onUse: Function;

  constructor(
    _id: number,
    name: string,
    description: string,
    typeOfCard: CardType,
    onUse: Function
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.typeOfCard = typeOfCard;
    this.onUse = onUse;
  }
}

export default Ability;
