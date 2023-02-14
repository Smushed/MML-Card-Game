using MML_Card_BE.Models.Card.Useable.Interfaces;
using MML_Card_BE.Models.Enum;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MML_Card_BE.Models.Card.Useable
{
    public class Event : IEvent
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }

        [BsonElement("name")]
        [BsonRepresentation(BsonType.String)]
        public string Name { get; set; }

        [BsonElement("description")]
        [BsonRepresentation(BsonType.String)]
        public string? Description { get; set; }


        [BsonElement("isFlash")]
        [BsonRepresentation(BsonType.Boolean)]
        public bool IsFlash
        {
            get => this.CardType == CardTypeEnum.FlashEvent;
            set => this.CardType = value ? CardTypeEnum.FlashEvent : CardTypeEnum.Event;
        }

        [BsonElement("onUse")]
        [BsonRepresentation(BsonType.String)]
        public Func<string> OnUse { get; set; }

        [BsonElement("cardType")]
        [BsonRepresentation(BsonType.Int32)]
        private CardTypeEnum CardType { get; set; }
        public string type
        {
            get => CardType.ToString();
        }

        [BsonElement("imageId")]
        [BsonRepresentation(BsonType.String)]
        public string? ImageId { get; set; }

        [BsonElement("cardNumber")]
        [BsonRepresentation(BsonType.Int32)]
        public int CardNumber { get; set; }

        [BsonElement("CardSet")]
        [BsonRepresentation(BsonType.String)]
        public SetEnum Set { get; set; }
    }
}
