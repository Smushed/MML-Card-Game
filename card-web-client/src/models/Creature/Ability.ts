interface IAbility {
  _id: number;
  name: string;
  onUse: Function;
  description: string;
}

class Ability implements IAbility {
  _id: number;
  name: string;
  description: string;
  onUse: Function;

  constructor(_id: number, name: string, description: string, onUse: Function) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.onUse = onUse;
  }
}

function createGenericAbility(): Ability {
  return new Ability(
    0, // _id
    'Generic Ability Card', // name
    'This is the Ability Description', // description
    () => {
      console.log('This is the onUse function');
    }
  );
}

export default Ability;
