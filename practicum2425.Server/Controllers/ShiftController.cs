using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.DTOs;
using practicum2425.Server.Interfaces;

[ApiController]
[Route("api/[controller]")]
public class ShiftController : ControllerBase
{
    private readonly IShiftService _shiftService;
    public ShiftController(IShiftService service)
    {
        _shiftService = service;
    }

    [HttpGet("get")]
    public async Task<List<Shift>> GetShiftsListAsync()
    {
        return await _shiftService.GetAllShifts();
    }

    [HttpPost("create")]
    public async Task CreateShift([FromBody] ShiftDTO shiftDTO )
    {
        Shift shift = new Shift()
        {
            StartTime = shiftDTO.StartTime,
            EndTime = shiftDTO.EndTime,
            Description = shiftDTO.Description,
            Location = shiftDTO.Location,
            RequestedEmployees = shiftDTO.RequestedEmployees,
            Status = shiftDTO.Status,
        };

        await _shiftService.CreateShift(shift);
    }

    [HttpPost("cancel")]
    public async Task CancelShift([FromBody] int shiftId)
    {
        await _shiftService.CancelShiftAsync(shiftId);
    }
}