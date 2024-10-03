using Microsoft.EntityFrameworkCore;
using practicum2425.Server.Data;
using practicum2425.Server.Data.Interfaces;

namespace practicum2425.Server.Services;


public class CompanyService : ICompanyService
{
    readonly PostgresContext _context;
    public CompanyService(PostgresContext context)
    {
        _context = context;
    }

    public async Task<List<Company>> GetCompanyListAsync()
    {
        return await _context.Companies.ToListAsync();
    }
}
