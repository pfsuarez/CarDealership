using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarDealership.Api.Entities
{
    public class BaseEntity
    {
      [Key]
      [DatabaseGenerated(DatabaseGeneratedOption.None)]
      public Guid Id { get; init; }
    }
}