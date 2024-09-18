using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.Interfaces;

namespace practicum2425.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeShiftController(IEmployeeShiftService service, IShiftService shiftService) : ControllerBase
{
    private readonly IEmployeeShiftService _empShiftService = service;
    private readonly IShiftService _shiftService = shiftService;

    [HttpPost()]
    public async Task CreateEmpShift([FromBody] EmployeeShift empShift)
    {
        var signedUpFor = GetEmpShifts(empShift.Id);
        var toSignUpFor = await _shiftService.GetShiftById(empShift.Id);

        DateTime ts = DateTime.Parse(toSignUpFor.StartTime);
        DateTime te = DateTime.Parse(toSignUpFor.EndTime);
        foreach (Shift s in signedUpFor)
        {
            DateTime ss = DateTime.Parse(s.StartTime);
            DateTime se = DateTime.Parse(s.EndTime);
            if ((ts > ss && ts < se) || (te > ss && te < se))
            {
                return;
            }
        }

        await _empShiftService.CreateEmployeeShift(empShift);
    }

    [HttpGet()]
    public List<Shift> GetEmpShifts(int empId)
    {
        return _empShiftService.GetEmpShifts(empId);
    }
}