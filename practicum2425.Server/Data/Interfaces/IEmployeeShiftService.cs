using practicum2425.Server.Data;

public interface IEmployeeShiftService
{ 
    Task CreateEmployeeShift(EmployeeShift empShift);
    Task DeleteEmpShiftAsync(int shiftId);
    List<Shift> GetScheduledShiftsByEmpId(int empId);
}