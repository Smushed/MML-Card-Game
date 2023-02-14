using MML_Card_BE.Models.Categories.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MML_Card_BE.Models.Categories
{
    public class CardIndex : ICardIndex
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }

        [BsonElement("index")]
        [BsonRepresentation(BsonType.Int32)]
        public int index { get; set; }

        [BsonElement("cardId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public int cardId { get; set; }
    }
}
