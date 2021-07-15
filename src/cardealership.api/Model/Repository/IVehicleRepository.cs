using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CarDealership.Api.Entities;

namespace CarDealership.Api.Repository
{
  public interface IVehicleRepository
  {
    Task<IEnumerable<Vehicle>> GetAllAsync();
    Task<Vehicle> GetByIdAsync(Guid id);
    Task UpdateAsync(Vehicle vehicle);
    Task CreateAsync(Vehicle vehicle);
    Task RemoveAsync(Vehicle vehicle);
  }
}