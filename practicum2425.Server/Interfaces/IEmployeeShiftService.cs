using practicum2425.Server.Data;

public interface IEmployeeShiftService
{ 
    Task CreateEmployeeShift(EmployeeShift empShift);
    List<Shift> GetScheduledShiftsByEmpId(int empId);
}