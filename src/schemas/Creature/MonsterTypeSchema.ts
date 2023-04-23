import { Schema, model, Types } from 'mongoose';

interface IMonsterTypeSchema {
  _id: Schema.Types.ObjectId;
  monsterType: String;
}

const MonsterTypeSchema = new Schema<IMonsterTypeSchema>({
  monsterType: { type: String, required: true },
});

const MonsterTypeModel = model<IMonsterTypeSchema>(
  'MonsterType',
  MonsterTypeSchema
);

export default MonsterTypeModel;
