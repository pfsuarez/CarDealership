using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CarDealership.Api.Entities;
using CarDealership.Api.Persistance;
using Microsoft.EntityFrameworkCore;

namespace CarDealership.Api.Repository
{
  public class VehicleRepository : IVehicleRepository
  {
    private readonly CarDealershipDbContext context;

    public VehicleRepository(CarDealershipDbContext context) => this.context = context;

    public async Task CreateAsync(Vehicle vehicle)
    {
      context.Vehicles.Add(vehicle);
      await context.SaveChangesAsync();
    }

    public async Task<IEnumerable<Vehicle>> GetAllAsync() => await context.Vehicles.ToListAsync();

    public async Task<Vehicle> GetByIdAsync(Guid id)
    {
      var entity = await context.Vehicles.SingleOrDefaultAsync(v => v.Id == id);
      if (entity is not null)
      {
        context.Entry(entity).State = EntityState.Detached;
      }
      return entity;
    }

    public async Task RemoveAsync(Vehicle vehicle)
    {
      context.Entry(vehicle).State = EntityState.Deleted;
      await context.SaveChangesAsync();
    }

    public async Task UpdateAsync(Vehicle vehicle)
    {
      context.Entry(vehicle).State = EntityState.Modified;
      await context.SaveChangesAsync();
    }
  }
}