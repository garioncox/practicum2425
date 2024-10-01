﻿using practicum2425.Server.Data;

namespace practicum2425.Server.Interfaces;

public interface IEmployeeService
{
    public Task ResignFromShift(int shift_id);
    public Task<List<Employee>> GetEmployeesListAsync();
    public Task<Employee> GetEmployeeByIdAsync(int id);
}
