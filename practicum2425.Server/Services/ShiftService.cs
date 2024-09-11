using Microsoft.EntityFrameworkCore;
using practicum2425.Server.Data;

namespace practicum2425.Server.Services;

public interface IShiftService
{
    public Task CancelShiftAsync(int shift_id);
}


public class ShiftService : IShiftService
{
    readonly PostgresContext _context;
    public ShiftService(PostgresContext context)
    {
        _context = context;
    }

    public async Task CancelShiftAsync(int shift_id)
    {
        Shift? shift = await _context.Shifts
            .Where(s => s.Id == shift_id)
            .FirstOrDefaultAsync();

        if (shift != null)
        {
            shift.Status = Shift.STATUS_ARCHIVED;
            _context.Shifts.Update(shift);
        }
    }
}
