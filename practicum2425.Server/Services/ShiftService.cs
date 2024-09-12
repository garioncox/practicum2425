using Microsoft.EntityFrameworkCore;
using practicum2425.Server.Data;
using practicum2425.Server.Interfaces;

namespace practicum2425.Server.Services;
public class ShiftService : IShiftService
{
    readonly PostgresContext _context;
    public ShiftService(PostgresContext context)
    {
        _context = context;
    }

    public async Task<List<Shift>> GetAllShifts()
    {
        return await _context.Shifts.ToListAsync();
    }
}
