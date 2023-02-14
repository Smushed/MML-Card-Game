namespace MML_Card_BE.Models.Categories.Interfaces
{
    public interface ICardsInSet
    {
        public string? _id { get; set; }
        public string SetId { get; set; }
        public string CardId { get; set; }
        public int Rarity { get; set; }
    }
}
