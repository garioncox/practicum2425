﻿using practicum2425.Server.Data;

namespace practicum2425.Server.Data.Interfaces;

public interface IShiftService
{
    public Task<List<Shift>> GetAllShifts();
    public Task<List<Shift>> GetAllArchivedAndCompletedShifts();
    public Task<Shift> GetShiftById(int id);
    public Task CreateShift(Shift shift);
    public Task ArchiveShiftAsync(int shiftId);
    public Task EditShiftAsync(Shift shift);
    public Task DeleteShiftAsync(int shiftId);
}
