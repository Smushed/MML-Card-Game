namespace MML_Card_BE.Services.BaseDatabase
{
    public class DatabaseSettings
    {
        public string ConnectionString { get; set; } = null;
        public string DatabaseName { get; set; } = null;
        public string CardCollection { get; set; } = null;
        public string CreatureTypeCollection { get; set; } = null;
    }
}
