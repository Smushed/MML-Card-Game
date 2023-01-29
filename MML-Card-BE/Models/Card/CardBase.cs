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
        public string? _id { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("description")]
        public string? Description { get; set; }
        [BsonElement("cardType")]
        private CardTypeEnum CardType { get; set; }
        public string type
        {
            get { return CardType.ToString(); }
        }


        public CardBase(string? id, string name, string? description, CardTypeEnum typeOfCard)
        {
            _id = id;
            Name = name;
            Description = description;
            CardType = typeOfCard;
        }
    }
}
