using Microsoft.AspNetCore.Mvc;
using MML_Card_BE.Models.Card;
using MML_Card_BE.Models.Card.Creature;
using MML_Card_BE.Models.Card.Useable;
using MML_Card_BE.Models.Enum;
using MML_Card_BE.Services.CardServices;

namespace MML_Card_BE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CardController : ControllerBase
    {
        private readonly ILogger<CardController> _logger;
        private readonly HeroService _heroService;
        private readonly MonsterService _monsterService;
        private readonly BarricadeService _barricadeService;
        private readonly BattlefieldService _battlefieldService;
        private readonly EquipmentService _equipmentService;
        private readonly EventService _eventService;

        public CardController(ILogger<CardController> logger, 
            HeroService heroService, 
            MonsterService monsterService, 
            BarricadeService barricadeService, 
            BattlefieldService battlefieldService, 
            EquipmentService equipmentService, 
            EventService eventService)
        {
            _logger = logger;
            _heroService = heroService;
            _monsterService = monsterService;
            _barricadeService = barricadeService;
            _battlefieldService = battlefieldService;
            _equipmentService = equipmentService;
            _eventService = eventService;
        }

        //HERO SECTION
        [HttpGet("all",Name = "getAllHeroes")]
        public async Task<List<Hero>> GetAllHeroes()
        {
            var cards = await _heroService.GetAllAsync();
            return cards;
        }

        [HttpPost(Name = "CreateCard")]
        public async void CreateHero(Hero newHero)
        {
            await _heroService.CreateAsync(newHero);
        }
        //END HERO SECTION

        //MONSTER SECTION
        [HttpGet("all", Name = "getAllMonsters")]
        public async Task<List<Monster>> GetAllMonsters()
        {
            var monsters = await _monsterService.GetAllAsync();
            return monsters;
        }

        [HttpPost(Name = "CreateMonster")]
        public async void CreateMonster(Monster newMonster)
        {
            await _monsterService.CreateAsync(newMonster);
        }
        //END MONSTER SECTION

        //BARRICADE SECTION
        [HttpGet("all", Name = "getAllBarricades")]
        public async Task<List<Barricade>> GetAllBarricades()
        {
            var barricades = await _barricadeService.GetAllAsync();
            return barricades;
        }

        [HttpPost(Name = "CreateBarricade")]
        public async void CreateBarricade(Barricade newBarricade)
        {
            await _barricadeService.CreateAsync(newBarricade);
        }
        //END BARRICADE SECTION

        //BATTLEFIELD SECTION
        [HttpGet("all", Name = "getAllBattlefields")]
        public async Task<List<Battlefield>> GetAllBattlefields()
        {
            var battlefields = await _battlefieldService.GetAllAsync();
            return battlefields;
        }

        [HttpPost(Name = "CreateBattlefield")]
        public async void CreateBattlefield(Battlefield newBattlefield)
        {
            await _battlefieldService.CreateAsync(newBattlefield);
        }
        //END BATTLEFIELD SECTION

        //EQUIPMENT SECTION
        [HttpGet("all", Name = "getAllEquipment")]
        public async Task<List<Equipment>> GetAllEquipment()
        {
            var equipmentList = await _equipmentService.GetAllAsync();
            return equipmentList;
        }

        [HttpPost(Name = "CreateEquipment")]
        public async void CreateEquipment(Equipment newEquipment)
        {
            await _equipmentService.CreateAsync(newEquipment);
        }
        //END EQUIPMENT SECTION

        //EVENT SECTION
        [HttpGet("all", Name = "getAllEvents")]
        public async Task<List<Event>> GetAllEvents()
        {
            var events = await _eventService.GetAllAsync();
            return events;
        }

        [HttpPost(Name = "CreateEvent")]
        public async void CreateEvent(Event newEvent)
        {
            await _eventService.CreateAsync(newEvent);
        }
        //END EVENT SECTION
    }
}
