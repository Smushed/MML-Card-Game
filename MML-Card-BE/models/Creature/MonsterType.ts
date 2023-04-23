import { Types } from 'mongoose';

interface IMonsterType {
  monsterType: string;
}

class MonsterType implements IMonsterType {
  private _id: Types.ObjectId;
  public get id(): string {
    return this._id.toHexString();
  }
  monsterType: string;

  constructor(_id: Types.ObjectId, monsterType: string) {
    this._id = _id;
    this.monsterType = monsterType;
  }
}

export default MonsterType;
