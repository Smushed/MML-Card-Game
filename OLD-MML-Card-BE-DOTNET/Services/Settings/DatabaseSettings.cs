namespace MML_Card_BE.Services.Settings
{
    public class DatabaseSettings
    {
        public string ConnectionString { get; set; } = null;
        public string DatabaseName { get; set; } = null;
        public string CardCollection { get; set; } = null;
        public string CreatureTypeCollection { get; set; } = null;
        public string HeroCollection { get; set; } = null;
        public string MonsterCollection { get; set; } = null;
        public string BarricadeCollection { get; set; } = null;
        public string BattlefieldCollection { get; set; } = null;
        public string EventCollection { get; set; } = null;
        public string EquipmentCollection { get; set; } = null;
    }
}
