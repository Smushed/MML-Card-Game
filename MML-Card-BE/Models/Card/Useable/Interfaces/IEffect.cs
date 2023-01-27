namespace MML_Card_BE.Models.Card.Useable.Interfaces
{
    public interface IEffect : ICardBase
    {
        Func<string> OnTrigger { get; set; }
        string Description { get; set; }
    }
}
