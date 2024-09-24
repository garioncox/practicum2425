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

    public List<Shift> GetEmpShifts(int empId)
    {
        return _context.Shifts
            .Where(s => s.EmployeeShifts.Any(es => es.EmpId == empId))
            .ToList();
    }

    public async Task DeleteEmpShiftAsync(int empShiftId)
    {
        EmployeeShift? shift = _context.EmployeeShifts
            .Where(s => s.Id == empShiftId)
            .FirstOrDefault();

        if (shift != null)
        {
            _context.EmployeeShifts.Remove(shift);
            await _context.SaveChangesAsync();
        }
    }
}
