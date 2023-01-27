using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card
{
    public interface ICardBase
    {
        string Name { get; set; }
        string? Description { get; set; }
        CardType TypeOfCard { get; set; }
    }
}
