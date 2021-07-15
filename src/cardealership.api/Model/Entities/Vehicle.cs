using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarDealership.Api.Entities
{
    public class Vehicle : BaseEntity
    {
      public int OrderNumber { get; init; }
      public string Chassis { get; init; }
      public string Model { get; init; }
      public string License { get; init; }
      public DateTimeOffset DeliveryDate { get; init; }
    }
}