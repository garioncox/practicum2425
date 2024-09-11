using Microsoft.AspNetCore.Mvc;
using practicum2425.Server.Data;
using practicum2425.Server.Services;

namespace practicum2425.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CompanyController : ControllerBase
    {
        private readonly ICompanyService _companyService;
        public CompanyController(ICompanyService service)
        {
            _companyService = service;
        }

        [HttpGet("GetCompanies")]
        public async Task<List<Company>> GetCompanyListAsync()
        {
            return await _companyService.GetCompanyListAsync();
        }
    }
}
