using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.Interfaces;
using practicum2425.Server.Services;

namespace practicum2425.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CompanyController : ControllerBase
{
    private readonly ICompanyService _CompanyService;
    public CompanyController(ICompanyService service)
    {
        _CompanyService = service;
    }

    [HttpGet("GetCompanies")]
    public async Task<List<Company>> GetCompanyListAsync()
    {
        return await _CompanyService.GetCompanyListAsync();
    }
}
