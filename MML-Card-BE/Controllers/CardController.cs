using Microsoft.AspNetCore.Mvc;
using MML_Card_BE.Models.Card;
using MML_Card_BE.Models.Enum;
using MML_Card_BE.Services;

namespace MML_Card_BE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CardController : ControllerBase
    {
        private readonly ILogger<CardController> _logger;
        private readonly CardService _cardService;

        public CardController(ILogger<CardController> logger, CardService cardService)
        {
            _logger = logger;
            _cardService = cardService;
        }

        [HttpGet("all",Name = "GetCards")]
        public async Task<List<CardBase>> GetAllCards()
        {
            var cards = await _cardService.GetAllAsync();
            return cards;
        }

        [HttpPost(Name = "CreateCard")]
        public async void CreateCard(string name, string description, CardType typeOfCard)
        {
            var cardToCreate = new CardBase(null, name, description, typeOfCard);
            await _cardService.CreateAsync(cardToCreate);
        }

        [HttpPut(Name = "UpdateCard")]
        public async Task<CardBase> UpdateCard(CardBase cardToUpdate)
        {
            var updatedCard = await _cardService.UpdateOneAsync(cardToUpdate);
            return updatedCard;
        }
    }
}
