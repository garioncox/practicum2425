using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.Data.DTOs;
using practicum2425.Server.Data.Interfaces;

namespace practicum2425.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : Controller
{
    private readonly IEmployeeService _EmployeeService;
    public EmployeeController(IEmployeeService service)
    {
        _EmployeeService = service;
    }

    [HttpGet("GetEmployees")]
    public async Task<List<Employee>> GetEmployeeListAsync()
    {
        return await _EmployeeService.GetEmployeesListAsync();
    }

    [HttpGet("GetEmployees/{id}")]
    public async Task<Employee> GetEmployeeById( int id)
    {
        return await _EmployeeService.GetEmployeeByIdAsync(id);
    }

    [HttpPost("PostEmployee/")]
    public async Task PostEmployee([FromBody] EmployeeDTO employeeDTO)
    {
        Employee employee = new Employee()
        {
            Phonenumber = employeeDTO.Phonenumber,
            Email = employeeDTO.Email,
            Name = employeeDTO.Name
        };
        await _EmployeeService.PostEmployee(employee);
    }
}
