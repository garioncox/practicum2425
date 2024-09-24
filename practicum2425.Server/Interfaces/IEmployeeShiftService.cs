using practicum2425.Server.Data;

public interface IEmployeeShiftService
{ 
    Task CreateEmployeeShift(EmployeeShift empShift);
    List<Shift> GetEmpShifts(int empId);
    Task DeleteEmpShiftAsync(int shiftId);
}