using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card
{
    public interface ICardBase
    {
        string _id { get; set; }
        string Name { get; set; }
        string? Description { get; set; }
        string imageId { get; set; }
    }
}
