using MML_Card_BE.Models.Card.Useable.Interfaces;
using MongoDB.Bson.Serialization.Attributes;

namespace MML_Card_BE.Models.Card.Useable
{
    public class Effect : IEffect
    {
        [BsonElement("description")]
        public string? Description { get; set; }

        public Func<string> OnTrigger { get; set; }
    }
}
