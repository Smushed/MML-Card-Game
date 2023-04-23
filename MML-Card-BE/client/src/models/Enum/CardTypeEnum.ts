enum CardTypeEnum {
  Hero = 'Hero',
  Monster = 'Monster',
  Event = 'Event',
  Effect = 'Effect',
  Equipment = 'Equipment',
  Barricade = 'Barricade',
  Battlefield = 'Battlefield',
}

const CardTypeEnumMap = new Map<CardTypeEnum, string>([
  [CardTypeEnum.Hero, 'Hero'],
  [CardTypeEnum.Monster, 'Monster'],
  [CardTypeEnum.Event, 'Event'],
  [CardTypeEnum.Effect, 'Effect'],
  [CardTypeEnum.Equipment, 'Equipment'],
  [CardTypeEnum.Barricade, 'Barricade'],
  [CardTypeEnum.Battlefield, 'Battlefield'],
]);

const CardTypeEnumArray = Array.from(CardTypeEnumMap, ([name]) => name);

export { CardTypeEnumMap, CardTypeEnumArray };

export default CardTypeEnum;
