namespace MML_Card_BE.Models.Card.Creature.Interfaces
{
    public interface IMonster : IBaseCreature
    {
        string[] MonsterType { get; set; }
    }
}
