namespace AsadAfzal.DBFactory.Domains
{
    public class Document : Base
    {
        public Guid EntityId { get; set; }
        public string EntityType { get;set; }
        public string Url { get; set; }
    }
}
