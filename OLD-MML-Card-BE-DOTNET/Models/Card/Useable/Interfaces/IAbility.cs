using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MML_Card_BE.Models.Card.Useable.Interfaces
{
    public interface IAbility
    {
        string? _id { get; set; }
        string Name { get; set; }

        Func<string> OnUse { get; set; }
    }
}
