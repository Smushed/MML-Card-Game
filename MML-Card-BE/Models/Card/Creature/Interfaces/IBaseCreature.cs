using MML_Card_BE.Models.Card.Useable;
using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card.Creature.Interfaces
{
    public interface IBaseCreature : ICardBase
    {
        public Equipment[] EquippedItems { get; set; }
        public EquipmentSlot[] EquipmentSlots { get; set; }
        public Effect[] Effect { get; set; }
        public Ability[] Abilities { get; set; }
        public Func<string> Exhaust { get; set; }
    }
}
