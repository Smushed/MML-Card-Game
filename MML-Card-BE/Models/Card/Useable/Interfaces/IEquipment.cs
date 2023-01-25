using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card.Useable.Interfaces
{
    public interface IEquipment
    {
        string Name { get; set; }
        EquipmentSlot Slot { get; set; }
        int? Bonus { get; set; }
    }
}
