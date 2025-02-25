using AsadAfzal.DBFactory.Domains;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AsadAfzal.DBFactory.Context
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {
        }
        public DbSet<Projects> Projects { get; set; }
        public DbSet<Document> Documents { get; set; }
    }
}
