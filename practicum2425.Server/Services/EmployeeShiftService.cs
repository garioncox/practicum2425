using Microsoft.EntityFrameworkCore;
using practicum2425.Server.Data;
using practicum2425.Server.DTOs;
using practicum2425.Server.Interfaces;

namespace practicum2425.Server.Services;

public class EmployeeShiftService : IEmployeeShiftService
{
    readonly PostgresContext _context;
    public EmployeeShiftService(PostgresContext context)
    {
        _context = context;
    }

    public async Task CreateEmployeeShift(EmployeeShift empShift)
    {
        _context.EmployeeShifts.Add(empShift);
        await _context.SaveChangesAsync();
    }

    public List<Shift> GetScheduledShiftsByEmpId(int empId)
    {
        return _context.Shifts
            .Where(s => s.EmployeeShifts.Any(es => es.EmpId == empId))
            .ToList();
    }
}
