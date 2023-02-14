enum EquipmentSlotEnum {
  Arm = 'Arm',
  Leg = 'Leg',
  Torso = 'Torso',
  Head = 'Head',
  Ranged = 'Ranged',
}

const EquipmentSlotEnumMap = new Map<EquipmentSlotEnum, string>([
  [EquipmentSlotEnum.Arm, 'Arm'],
  [EquipmentSlotEnum.Leg, 'Leg'],
  [EquipmentSlotEnum.Torso, 'Torso'],
  [EquipmentSlotEnum.Head, 'Head'],
  [EquipmentSlotEnum.Ranged, 'Ranged'],
]);

const EquipmentSlotEnumArray = Array.from(
  EquipmentSlotEnumMap,
  ([name]) => name
);

export { EquipmentSlotEnumMap, EquipmentSlotEnumArray };

export default EquipmentSlotEnum;
