using Microsoft.Extensions.Options;
using MML_Card_BE.Models.Card.Useable;
using MML_Card_BE.Services.Settings;
using MongoDB.Driver;

namespace MML_Card_BE.Services.CardServices
{
    public class EventService
    {
        private readonly IMongoCollection<Event> _cards;

        public EventService(IOptions<DatabaseSettings> options)
        {
            var mongoClient = new MongoClient(options.Value.ConnectionString);

            _cards = mongoClient
                .GetDatabase(options.Value.DatabaseName)
                .GetCollection<Event>(options.Value.EventCollection);
        }

        public async Task<List<Event>> GetAllAsync() => await _cards.Find(_ => true).ToListAsync();

        public async Task<Event> GetByIdAsync(string id) => await _cards.Find(c => c._id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Event card) => await _cards.InsertOneAsync(card);

        //public async Task<CardBase> UpdateOneAsync(CardBase card)
        //{
        //    var result = await _cards.ReplaceOneAsync(c => c._id.Equals(card._id), card);
        //    return new CardBase(result);
        //}

        public async Task DeleteByIdAsync(string id) => await _cards.DeleteOneAsync(c => c._id.Equals(id));
    }
}