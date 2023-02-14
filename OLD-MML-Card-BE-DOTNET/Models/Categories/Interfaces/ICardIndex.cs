using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace MML_Card_BE.Models.Categories.Interfaces
{
    public interface ICardIndex
    {

        public string? _id { get; set; }
        public int index { get; set; }
        public int cardId { get; set; }
    }
}
