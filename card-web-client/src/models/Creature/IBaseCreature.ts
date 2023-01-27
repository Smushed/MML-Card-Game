import { ICardBase } from "../CardBase";
import EquipmentSlot from "../Enum/EquipmentSlot";
import { Effect, Ability } from "../Useable";
import Equipment from "../Useable/Equipment";

interface IBaseCreature extends ICardBase {
  equippedItems: Equipment[];
  equipmentSlots: EquipmentSlot[];
  effect: Effect[];
  Abilities: Ability[];
  Exhaust: Function;
}

export default IBaseCreature;
