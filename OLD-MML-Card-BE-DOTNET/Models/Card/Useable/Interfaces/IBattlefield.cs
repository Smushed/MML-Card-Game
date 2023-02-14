using MML_Card_BE.Models.Card.Generic.Interfaces;

namespace MML_Card_BE.Models.Card.Useable.Interfaces
{
    public interface IBattlefield : ICardBase
    {
        Func<string> OnUse { get; set; }
    }
}
