using MML_Card_BE.Models.Card.Useable.Interfaces;
using MML_Card_BE.Models.Enum;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MML_Card_BE.Models.Card.Useable
{
    public class Equipment : IEquipment
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
            get => CardType.ToString();
        }

        [BsonElement("imageId")]
        [BsonRepresentation(BsonType.String)]
        public string? ImageId { get; set; }

        [BsonElement("slot")]
        [BsonRepresentation(BsonType.Int32)]
        public EquipmentSlot Slot { get; set; }

        [BsonElement("bonus")]
        [BsonRepresentation(BsonType.Int32)]
        public int? Bonus { get; set; }

        [BsonElement("cardNumber")]
        [BsonRepresentation(BsonType.Int32)]
        public int CardNumber { get; set; }

        [BsonElement("CardSet")]
        [BsonRepresentation(BsonType.String)]
        public SetEnum Set { get; set; }
    }
}
