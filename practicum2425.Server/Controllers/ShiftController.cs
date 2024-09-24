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
    public async Task CreateShift([FromBody] ShiftDTO shiftDTO)
    {
        Shift shift = new()
        {
            StartTime = shiftDTO.StartTime,
            EndTime = shiftDTO.EndTime,
            Description = shiftDTO.Description,
            Location = shiftDTO.Location,
            RequestedEmployees = shiftDTO.RequestedEmployees,
            Status = Shift.STATUS_ACTIVE,
        };

        await _shiftService.CreateShift(shift);
    }

    [HttpPost("archive")]
    public async Task ArchiveShift(int shiftId)
    {
        await _shiftService.ArchiveShiftAsync(shiftId);

    [HttpPut("Edit/{id}")]
    public async Task EditShift([FromBody] Shift shift, int id)
    {
        await _shiftService.EditShift(shift);
    }
}