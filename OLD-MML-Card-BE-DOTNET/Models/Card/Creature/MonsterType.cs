using MML_Card_BE.Models.Card.Creature.Interfaces;
using MongoDB.Bson.Serialization.Attributes;

namespace MML_Card_BE.Models.Card.Creature
{
    public class MonsterType : IMonsterType
    {
        [BsonElement("monsterTypeName")]
        public string MonsterTypeName { get; set; }
    }
}
