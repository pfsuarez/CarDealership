using System;
using System.ComponentModel.DataAnnotations;

namespace CarDealership.Api.Dtos
{
  public record InputVehicleDto([Required] int OrderNumber,
                           [Required] [MaxLength(20)] string Chassis,
                           [Required] [MaxLength(20)]string Model,
                           [Required] [MaxLength(20)]string License);
  public record OutputVehicleDto(Guid Id,
                                 int OrderNumber,
                                 string Chassis,
                                 string Model,
                                 string License,
                                 DateTimeOffset DeliveryDate);
}