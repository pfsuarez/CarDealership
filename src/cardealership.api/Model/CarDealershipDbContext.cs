using Microsoft.EntityFrameworkCore;
using CarDealership.Api.Entities;

namespace CarDealership.Api.Persistance
{
  public class CarDealershipDbContext : DbContext
  {
    public CarDealershipDbContext(DbContextOptions<CarDealershipDbContext> options) : base(options)
    {

    }

    public DbSet<Vehicle> Vehicles { get; set; }
  }
}