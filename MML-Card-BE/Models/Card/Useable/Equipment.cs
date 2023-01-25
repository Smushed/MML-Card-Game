using MML_Card_BE.Models.Card.Useable.Interfaces;
using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card.Useable
{
    public class Equipment : IEquipment
    {
        public string Name { get; set; }
        public EquipmentSlot Slot { get; set; }
        public int? Bonus { get; set; }
    }
}
