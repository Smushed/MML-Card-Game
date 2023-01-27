using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using MongoDB.Driver;
using MML_Card_BE.Models.Enum;

namespace MML_Card_BE.Models.Card
{
    public class CardBase : ICardBase
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        private string? _id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("description")]
        public string? Description { get; set; }
        [BsonElement("cardType")]
        public CardType TypeOfCard { get; set; }

        public CardBase(string? id, string name, string? description, CardType typeOfCard)
        {
            _id = id;
            Name = name;
            Description = description;
            TypeOfCard = typeOfCard;
        }
    }
}
