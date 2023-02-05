using MML_Card_BE.Models.Enum;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using MML_Card_BE.Models.Card.Useable.Interfaces;

namespace MML_Card_BE.Models.Card.Useable
{
    public class Ability : IAbility
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("onUse")]
        [BsonRepresentation(BsonType.String)]
        public Func<string> OnUse { get; set; }
    }
}
