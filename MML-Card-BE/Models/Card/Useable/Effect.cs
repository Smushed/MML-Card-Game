using MML_Card_BE.Models.Card.Useable.Interfaces;

namespace MML_Card_BE.Models.Card.Useable
{
    public class Effect : IEffect
    {
        public Func<string> OnTrigger { get; set; }
        public string Description { get; set; }
    }
}
