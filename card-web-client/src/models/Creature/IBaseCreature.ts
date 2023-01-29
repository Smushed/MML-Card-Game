import { ICardBase } from '../CardBase';
import EquipmentSlot from '../Enum/EquipmentSlotEnum';
import { Effect } from '../Useable';
import Equipment from '../Useable/Equipment';
import Ability from './Ability';

interface IBaseCreature extends ICardBase {
  level: number;
  equippedItems: Equipment[];
  equipmentSlots: EquipmentSlot[];
  effect: Effect[];
  Abilities: Ability[];
  Exhaust: Function;
}

export default IBaseCreature;
