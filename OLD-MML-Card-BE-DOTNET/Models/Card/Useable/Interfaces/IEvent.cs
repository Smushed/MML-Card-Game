using MML_Card_BE.Models.Card.Generic.Interfaces;

namespace MML_Card_BE.Models.Card.Useable.Interfaces
{
    public interface IEvent : ICardBase
    {
        bool IsFlash { get; set; }
        Func<string> OnUse { get; set; }
    }
}
