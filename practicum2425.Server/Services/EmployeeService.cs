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

    public async Task<Employee> GetEmployeeByIdAsync(int id)
    {
        Employee? employee = await _context.Employees.Where(e => e.Id == id).FirstOrDefaultAsync();
        return employee;
    }

    public async Task<List<Employee>> GetEmployeesListAsync()
    {
        return await _context.Employees.ToListAsync();
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
