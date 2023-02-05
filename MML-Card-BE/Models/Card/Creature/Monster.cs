using MML_Card_BE.Models.Enum;
using MML_Card_BE.Models.Card.Useable;
using MML_Card_BE.Models.Card.Creature.Interfaces;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MML_Card_BE.Models.Card.Creature
{
    public class Monster : IMonster
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

        [BsonElement("cardType")]
        [BsonRepresentation(BsonType.Int32)]
        private CardTypeEnum CardType { get; set; }
        public string type
        {
            get => CardType.ToString();
        }

        [BsonElement("imageId")]
        [BsonRepresentation(BsonType.String)]
        public string? imageId { get; set; }

        [BsonElement("level")]
        [BsonRepresentation(BsonType.Int32)]
        public int Level { get; set; }

        [BsonElement("creatureType")]
        [BsonRepresentation(BsonType.Array)]
        public string[] CreatureType { get; set; }
        
        public List<Equipment> EquippedItems { get; set; }

        [BsonElement("equipmentSlots")]
        [BsonRepresentation(BsonType.Array)]
        public List<EquipmentSlot> EquipmentSlots { get; set; }

        [BsonElement("effect")]
        [BsonRepresentation(BsonType.Array)]
        public List<Effect> Effect { get; set; }

        [BsonElement("abilities")]
        [BsonRepresentation(BsonType.Array)]
        public List<Ability> Abilities { get; set; }
        
        [BsonElement("exhaust")]
        [BsonRepresentation(BsonType.String)]
        public Func<string> Exhaust { get; set; }

        [BsonElement("monsterType")]
        [BsonRepresentation(BsonType.Array)]
        public string[] MonsterType { get; set; }
    }
}
