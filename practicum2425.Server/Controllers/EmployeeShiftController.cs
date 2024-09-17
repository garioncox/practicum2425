using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.DTOs;
using practicum2425.Server.Services;

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
    public async Task CreateEmpShift( [FromBody] EmployeeShiftDTO empShiftDTO)
    {

        Console.Write(empShiftDTO.EmployeeId + " : employeeId" + empShiftDTO.ShiftId + " : shiftId");

        EmployeeShift empShift = new EmployeeShift() {
            EmpId = empShiftDTO.EmployeeId, 
            ShiftId = empShiftDTO.ShiftId
        };

        await _companyService.CreateEmployeeShift(empShift);
    }
}