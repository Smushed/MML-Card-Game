using MML_Card_BE.Models.Card.Useable;
using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card.Creature.Interfaces
{
    public interface IBaseCreature : ICardBase
    {
        int Level { get; set; }
        Equipment[] EquippedItems { get; set; }
        EquipmentSlot[] EquipmentSlots { get; set; }
        Effect[] Effect { get; set; }
        Ability[] Abilities { get; set; }
        Func<string> Exhaust { get; set; }
    }
}
