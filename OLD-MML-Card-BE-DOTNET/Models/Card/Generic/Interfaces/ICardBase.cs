using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card.Generic.Interfaces
{
    public interface ICardBase
    {
        string _id { get; set; }
        string Name { get; set; }
        string? Description { get; set; }
        string ImageId { get; set; }
        int CardNumber { get; set; }
        SetEnum Set { get; set; }
    }
}
