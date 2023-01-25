using MML_Card_BE.Models.Card.Useable.Interfaces;

namespace MML_Card_BE.Models.Card.Useable
{
    public class Ability : IAbility
    {
        public Func<string> OnUse { get; set; }
        public string Description { get; set; }
    }
}
