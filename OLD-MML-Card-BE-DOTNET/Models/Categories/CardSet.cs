using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using MML_Card_BE.Models.Categories.Interfaces;

namespace MML_Card_BE.Models.Categories
{
    public class CardSet : ICardSet
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }
        
        [BsonElement("name")]
        [BsonRepresentation(BsonType.String)]
        public string Name { get; set; }
    }
}
