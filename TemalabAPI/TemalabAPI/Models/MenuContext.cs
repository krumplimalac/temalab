using Microsoft.EntityFrameworkCore;

namespace TemalabAPI.Models
{
    public class MenuContext :DbContext
    {
        public MenuContext(DbContextOptions<MenuContext> options)
            : base(options)
        {
        }

        public DbSet<MenuItem> MenuItems { get; set; } = null!;
    }
}
