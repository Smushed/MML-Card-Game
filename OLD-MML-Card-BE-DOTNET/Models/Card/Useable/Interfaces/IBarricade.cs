using MML_Card_BE.Models.Card.Generic.Interfaces;

namespace MML_Card_BE.Models.Card.Useable.Interfaces
{
    public interface IBarricade : ICardBase
    {
        Func<string> OnUse { get; set; }
    }
}
