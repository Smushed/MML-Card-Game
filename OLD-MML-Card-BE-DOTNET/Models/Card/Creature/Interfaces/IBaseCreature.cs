using MML_Card_BE.Models.Card.Generic.Interfaces;
using MML_Card_BE.Models.Card.Useable;
using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card.Creature.Interfaces
{
    public interface IBaseCreature : ICardBase
    {
        int Level { get; set; }
        List<Equipment> EquippedItems { get; set; }
        List<EquipmentSlot> EquipmentSlots { get; set; }
        List<Effect> Effect { get; set; }
        List<Ability> Abilities { get; set; }
        Func<string> Exhaust { get; set; }
    }
}
