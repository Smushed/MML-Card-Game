enum FactionEnum {
  Human = 'Human',
  Undead = 'Undead',
}

const FactionEnumMap = new Map<FactionEnum, string>([
  [FactionEnum.Human, 'Human'],
  [FactionEnum.Undead, 'Undead'],
]);

const FactionEnumArray = Array.from(FactionEnumMap, ([name]) => name);

export { FactionEnumMap, FactionEnumArray };

export default FactionEnum;
