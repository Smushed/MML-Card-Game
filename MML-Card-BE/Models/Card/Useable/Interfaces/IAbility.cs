namespace MML_Card_BE.Models.Card.Useable.Interfaces
{
    public interface IAbility : ICardBase
    {
        Func<string> OnUse { get; set; }
        string Description { get; set; }
    }
}
