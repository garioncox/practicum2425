using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;

[ApiController]
[Route("api/[controller]")]
public class EmployeeShiftController : ControllerBase
{
    private readonly IEmployeeShiftService _companyService;
    public EmployeeShiftController(IEmployeeShiftService service)
    {
        _companyService = service;
    }

    [HttpPost()]
    public async Task CreateEmpShift( [FromBody] EmployeeShift empShift)
    {
        await _companyService.CreateEmployeeShift(empShift);
    }
}