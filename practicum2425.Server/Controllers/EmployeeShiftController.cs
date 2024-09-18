using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.DTOs;
using practicum2425.Server.Interfaces;
using System.Collections.Immutable;

namespace practicum2425.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeShiftController(IEmployeeShiftService service, IShiftService shiftService) : ControllerBase
{
    private readonly IEmployeeShiftService _empShiftService = service;
    private readonly IShiftService _shiftService = shiftService;

    [HttpPost()]
    public async Task CreateEmpShift([FromBody] EmployeeShiftDTO empShift)
    {
        var signedUpFor = GetEmpShifts(empShift.EmployeeId);
        var toSignUpFor = await _shiftService.GetShiftById(empShift.ShiftId);


        DateTime ts = DateTime.Parse(toSignUpFor.StartTime);
        DateTime te = DateTime.Parse(toSignUpFor.EndTime);
        foreach (Shift s in signedUpFor)
        {
            DateTime ss = DateTime.Parse(s.StartTime);
            DateTime se = DateTime.Parse(s.EndTime);
            // For the shift we are adding, check to see if it overlaps with an existing shift we signed up for
            if ((ts > ss && ts < se) || (te > ss && te < se))
            {
                return;
            }

            if (s.Id == toSignUpFor.Id)
            {
                return;
            }
        }

        EmployeeShift e = new()
        {
            EmpId = empShift.EmployeeId,
            ShiftId = empShift.ShiftId
        };

        await _empShiftService.CreateEmployeeShift(e);
    }

    [HttpGet()]
    public List<Shift> GetEmpShifts(int empId)
    {
        return _empShiftService.GetEmpShifts(empId);
    }
}