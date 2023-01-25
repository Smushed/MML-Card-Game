using Microsoft.Extensions.Options;
using MML_Card_BE.Models;
using MML_Card_BE.Models.Card;
using MML_Card_BE.Services.BaseDatabase;
using MongoDB.Driver;

namespace MML_Card_BE.Services
{
    public class CreatureType
    {
        private readonly IMongoCollection<CardBase> _cards;

        public CreatureType(IOptions<DatabaseSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _cards = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<CardBase>(options.Value.CreatureTypeCollection);
        }

        public async Task<List<CardBase>> GetAllAsync() => await _cards.Find(_ => true).ToListAsync();

        public async Task<CardBase> GetByIdAsync(string id) => await _cards.Find(c => c._id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(CardBase card) => await _cards.InsertOneAsync(card);

        public async Task<CardBase> UpdateOneAsync(CardBase card)
        {
            var result = await _cards.ReplaceOneAsync(c => c._id.Equals(card._id), card);
            return new CardBase(result);
        }

        public async Task DeleteByIdAsync(string id) => await _cards.DeleteOneAsync(c => c._id.Equals(id));
    }
}
