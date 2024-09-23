using practicum2425.Server.Data;

namespace practicum2425.Server.Interfaces;

public interface IShiftService
{
    public Task<List<Shift>> GetAllShifts();
    public Task<Shift> GetShiftById(int id);
    public Task CreateShift(Shift shift);
    public Task ArchiveShiftAsync(int shiftId);
}
