using System.ComponentModel.DataAnnotations;

namespace AsadAfzal.DBFactory.Domains
{
    public class Base
    {
        [Key]
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public Guid CreatedBy { get; set; }
        public Guid ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public Base()
        {
            Id = new Guid();
            CreatedDate = DateTime.Now;
        }
    }
}
