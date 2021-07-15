using System;
using CarDealership.Api.Dtos;
using CarDealership.Api.Entities;

namespace CarDealership.Api
{
  public static class Extensions
  {
    public static Vehicle AsEntity(this InputVehicleDto vehicledto) =>
      new Vehicle
      {
        Id = Guid.NewGuid(),
        Chassis = vehicledto.Chassis,
        License = vehicledto.License,
        Model = vehicledto.Model,
        OrderNumber = vehicledto.OrderNumber,
        DeliveryDate = DateTimeOffset.Now
      };
    
    public static Vehicle Merge(this InputVehicleDto vehicledto, Vehicle vehicleDb) =>
      new Vehicle
      {
        Id = vehicleDb.Id,
        Chassis = vehicledto.Chassis,
        License = vehicledto.License,
        Model = vehicledto.Model,
        OrderNumber = vehicledto.OrderNumber,
        DeliveryDate = vehicleDb.DeliveryDate
      };
    public static OutputVehicleDto AsDto(this Vehicle vehicle) =>
      new OutputVehicleDto(vehicle.Id,
                           vehicle.OrderNumber,
                           vehicle.Chassis,
                           vehicle.Model,
                           vehicle.License,
                           vehicle.DeliveryDate);
  }
}