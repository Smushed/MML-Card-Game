using MML_Card_BE.Models.Enum;
using MML_Card_BE.Models.Card.Generic.Interfaces;

namespace MML_Card_BE.Models.Card.Generic
{
    public class CardBase : ICardBase
    {
        public string? _id { get; set; }
        
        public string Name { get; set; }

        public string? Description { get; set; }
        
        private CardTypeEnum CardType { get; set; }
        public string type
        {
            get { return CardType.ToString(); }
        }
        
        public string ImageId { get; set; }

        public int CardNumber { get; set; }

        public SetEnum Set { get; set; }
    }
}
