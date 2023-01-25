using MongoDB.Bson.Serialization.Attributes;

namespace MML_Card_BE.Models.Card.Creature.Interfaces
{
    public interface ICreatureType
    {
        [BsonElement("creatureType")]
        string CreatureType { get; set; }
    }
}
