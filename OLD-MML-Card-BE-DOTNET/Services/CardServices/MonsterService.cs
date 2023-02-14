using Microsoft.Extensions.Options;
using MML_Card_BE.Models.Card.Creature;
using MML_Card_BE.Services.Settings;
using MongoDB.Driver;

namespace MML_Card_BE.Services.CardServices
{
    public class MonsterService
    {
        private readonly IMongoCollection<Monster> _cards;

        public MonsterService(IOptions<DatabaseSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _cards = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<Monster>(options.Value.MonsterCollection);
        }

        public async Task<List<Monster>> GetAllAsync() => await _cards.Find(_ => true).ToListAsync();

        public async Task<Monster> GetByIdAsync(string id) => await _cards.Find(c => c._id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Monster card) => await _cards.InsertOneAsync(card);

        //public async Task<CardBase> UpdateOneAsync(CardBase card)
        //{
        //    var result = await _cards.ReplaceOneAsync(c => c._id.Equals(card._id), card);
        //    return new CardBase(result);
        //}

        public async Task DeleteByIdAsync(string id) => await _cards.DeleteOneAsync(c => c._id.Equals(id));
    }
}