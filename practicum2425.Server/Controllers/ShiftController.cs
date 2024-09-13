﻿using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.Interfaces;
using practicum2425.Server.Services;

[ApiController]
[Route("api/[controller]")]
public class ShiftController : ControllerBase
{
    private readonly IShiftService _shiftService;
    public ShiftController(IShiftService service)
    {
        _shiftService = service;
    }

    [HttpGet("GetShifts")]
    public async Task<List<Shift>> GetShiftsListAsync()
    {
        return await _shiftService.GetAllShifts();
    }
}