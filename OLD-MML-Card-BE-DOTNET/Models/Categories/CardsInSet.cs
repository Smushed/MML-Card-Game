using MML_Card_BE.Models.Categories.Interfaces;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MML_Card_BE.Models.Categories
{
    public class CardsInSet : ICardsInSet
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string SetId { get; set; }

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string CardId { get; set; }

        [BsonElement("rarity")]
        [BsonRepresentation(BsonType.Int32)]
        public int Rarity { get; set; }
    }
}
