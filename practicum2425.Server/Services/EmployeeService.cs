using Microsoft.EntityFrameworkCore;
using practicum2425.Server.Data;
using practicum2425.Server.Interfaces;

namespace practicum2425.Server.Services;

public class EmployeeService : IEmployeeService
{
    readonly PostgresContext _context;
    public EmployeeService(PostgresContext context)
    {
        _context = context;
    }

    public async Task ResignFromShift(int shift_id)
    {
        EmployeeShift? shift = await _context.EmployeeShifts
            .Where(es => es.ShiftId == shift_id)
            .FirstOrDefaultAsync();

        if (shift != null)
        {
            _context.EmployeeShifts.Remove(shift);
            await _context.SaveChangesAsync();
        }
    }
}
