import MonsterTypeModel from '../schemas/Creature/MonsterTypeSchema';

const checkIfExists = async (monsterType: string) => {
  const monsterTypeExists = await MonsterTypeModel.findOne({
    monsterType,
  });
  return !!monsterTypeExists;
};

module.exports = {
  getAllMonsterTypes: () => {
    return new Promise(async (res, rej) => {
      const dbRes = await MonsterTypeModel.find({});
      res(dbRes);
    });
  },
  saveMonsterType: (newType: string) => {
    return new Promise(async (res, rej) => {
      const exists = await checkIfExists(newType);
      if (exists) {
        rej('Monster Type already exists');
      } else {
        const newMonsterType = new MonsterTypeModel({
          monsterType: newType,
        });
        const dbRes = await newMonsterType.save();
        res(dbRes);
      }
    });
  },
};
