using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarDealership.Api.Dtos;
using CarDealership.Api.Entities;
using CarDealership.Api.Repository;
using Microsoft.AspNetCore.Mvc;

namespace CarDealership.Api.Controllers
{
  [ApiController]
  [Route("/api/[controller]")]
  public class VehicleController : ControllerBase
  {
    private readonly IVehicleRepository vehicleRepository;

    public VehicleController(IVehicleRepository vehicleRepository)
    {
      this.vehicleRepository = vehicleRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetVehiclesAsync() => Ok((await vehicleRepository.GetAllAsync()).Select(v => v.AsDto()));

    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetVehicleAsync(Guid id)
    {
      try
      {
        var vehicle = await vehicleRepository.GetByIdAsync(id);

        if (vehicle is null)
        {
          return NotFound("Vehicle was not found!");
        }

        return Ok(vehicle.AsDto());
      }
      catch (System.Exception)
      {
        return BadRequest("An error has ocurred!");
      }
    }

    [HttpPost]
    public async Task<IActionResult> CreateAsync(InputVehicleDto vehicleDto)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest("Input properties are not valid.");
        }

        var vehicle = vehicleDto.AsEntity();
        await vehicleRepository.CreateAsync(vehicle);


        return CreatedAtAction(nameof(GetVehicleAsync), new { id = vehicle.Id }, vehicle.AsDto());
      }
      catch (System.Exception)
      {
        return BadRequest("An error has ocurred!");
      }
    }

    [HttpPut]
    [Route("{id}")]
    public async Task<IActionResult> UpdateAsync(Guid id, InputVehicleDto vehicleDto)
    {
      try
      {
        var vehicleDb = await vehicleRepository.GetByIdAsync(id);

        if (vehicleDb is null)
        {
          return NotFound("Vehicle was not found!");
        }

        if (!ModelState.IsValid)
        {
          return BadRequest("Input properties are not valid.");
        }

        var vehicle = vehicleDto.Merge(vehicleDb);
        await vehicleRepository.UpdateAsync(vehicle);

        return NoContent();
      }
      catch (System.Exception)
      {
        return BadRequest("An error has ocurred!");
      }
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> RemoveVehicle(Guid id)
    {
      try
      {
        var vehicleDb = await vehicleRepository.GetByIdAsync(id);

        if (vehicleDb is null)
        {
          return NotFound("Vehicle was not found!");
        }

        await vehicleRepository.RemoveAsync(vehicleDb);
        return NoContent();
      }
      catch (System.Exception)
      {
        return BadRequest("An error has ocurred!");
      }
    }
  }
}